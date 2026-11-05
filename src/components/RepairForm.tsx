import React, { useState, useEffect } from 'react';
import {
  Wrench,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MessageCircle,
  Info,
  RotateCcw,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  FORMSPREE_ENDPOINT,
  PHONE_BRANDS,
  FORM_SERVICES,
  BUSINESS_INFO,
} from '../config/business';

interface RepairFormProps {
  initialService?: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  phoneBrand: string;
  phoneModel: string;
  serviceRequired: string;
  problemDescription: string;
  preferredContactMethod: 'Phone Call' | 'WhatsApp';
  additionalInformation: string;
  _gotcha: string; // Honeypot field
}

export const RepairForm: React.FC<RepairFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    phoneBrand: '',
    phoneModel: '',
    serviceRequired: initialService || '',
    problemDescription: '',
    preferredContactMethod: 'Phone Call',
    additionalInformation: '',
    _gotcha: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Synchronize when a service enquiry button is clicked
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: initialService,
      }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (formData.emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress.trim())) {
        newErrors.emailAddress = 'Please enter a valid email address.';
      }
    }

    if (!formData.phoneBrand) {
      newErrors.phoneBrand = 'Please select your phone brand.';
    }

    if (!formData.phoneModel.trim()) {
      newErrors.phoneModel = 'Phone Model is required (e.g., iPhone 13, Galaxy S22).';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the service required.';
    }

    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = 'Please describe the problem you are experiencing.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field on change
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check honeypot spam bot trap
    if (formData._gotcha) {
      // Silently drop bot submission
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Real submission to Formspree endpoint
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          emailAddress: formData.emailAddress || 'Not provided',
          phoneBrand: formData.phoneBrand,
          phoneModel: formData.phoneModel,
          serviceRequired: formData.serviceRequired,
          problemDescription: formData.problemDescription,
          preferredContactMethod: formData.preferredContactMethod,
          additionalInformation: formData.additionalInformation || 'None',
          _subject: `New Repair Request: ${formData.fullName} - ${formData.serviceRequired} (${formData.phoneBrand} ${formData.phoneModel})`,
        }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        // Handle specific Formspree response or placeholder notice
        const isPlaceholder = FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');
        if (isPlaceholder) {
          setErrorMessage(
            'Formspree configuration notice: The form endpoint currently contains the placeholder "YOUR_FORM_ID". To receive submissions in your inbox, replace YOUR_FORM_ID in src/config/business.ts with your registered Formspree form ID.'
          );
        } else if (responseData && responseData.error) {
          setErrorMessage(
            `Submission error: ${responseData.error}. Your entered details have been preserved. You can also reach us directly via WhatsApp or phone.`
          );
        } else {
          setErrorMessage(
            'Submission was not processed by the server. Your information has been preserved. Please retry or contact Richard Phone Solutions directly via WhatsApp or phone.'
          );
        }
        setSubmitStatus('error');
      }
    } catch (err: unknown) {
      const isPlaceholder = FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');
      if (isPlaceholder) {
        setErrorMessage(
          'Formspree setup notice: The form endpoint currently uses the placeholder "YOUR_FORM_ID". Please set your live Formspree Form ID in src/config/business.ts to activate email delivery. Your entered information has been preserved.'
        );
      } else {
        setErrorMessage(
          'A network error occurred while connecting to the form service. Your information has been preserved. Please check your connection or contact us via WhatsApp.'
        );
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      phoneBrand: '',
      phoneModel: '',
      serviceRequired: '',
      problemDescription: '',
      preferredContactMethod: 'Phone Call',
      additionalInformation: '',
      _gotcha: '',
    });
    setErrors({});
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const isFormspreeConfigured = !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');

  return (
    <section id="repair-form" className="py-14 sm:py-20 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Container with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          
          {/* Header */}
          <div className="p-6 sm:p-10 bg-slate-900 text-white relative">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Service Request Form</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Book a Repair or Request a Service
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Fill in your device details below. Our technicians will review your request and get back to you promptly.
              </p>
            </div>

            {/* Direct contact shortcut */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="text-slate-400">Need urgent advice?</span>
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="text-blue-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-5 sm:p-10">
            
            {/* Formspree Config Indicator */}
            {!isFormspreeConfigured && (
              <div className="mb-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950 dark:text-amber-100">Formspree Endpoint Configuration</p>
                  <p className="text-amber-800 dark:text-amber-300 mt-0.5 leading-relaxed">
                    The form is connected to Formspree endpoint <code className="bg-amber-100 dark:bg-amber-900/60 px-1.5 py-0.5 rounded text-amber-950 dark:text-amber-100 font-mono text-xs">{FORMSPREE_ENDPOINT}</code>. When you are ready to receive real customer inquiries in your email inbox, update the Form ID in <code className="bg-amber-100 dark:bg-amber-900/60 px-1.5 py-0.5 rounded text-amber-950 dark:text-amber-100 font-mono text-xs">src/config/business.ts</code>.
                  </p>
                </div>
              </div>
            )}

            {/* Success State */}
            {submitStatus === 'success' ? (
              <div className="py-12 px-6 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Request Received!
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Your request has been submitted successfully. Thank you for contacting Richard Phone Solutions. We will get in touch with you.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Request</span>
                  </button>
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-950 dark:text-red-100">Submission Could Not Complete</p>
                      <p className="text-xs sm:text-sm text-red-800 dark:text-red-300 mt-1 leading-relaxed">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Honeypot Spam Protection Field */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Section 1: Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                    Customer Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Kwame Mensah"
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g., 0548395258"
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        required
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Address (optional) */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-slate-400 dark:text-slate-500 text-[11px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="e.g., kwame@example.com"
                      className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                        errors.emailAddress ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                      }`}
                    />
                    {errors.emailAddress && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.emailAddress}</p>
                    )}
                  </div>
                </div>

                {/* Section 2: Device Details */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                    Phone & Service Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Brand */}
                    <div>
                      <label htmlFor="phoneBrand" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Brand <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="phoneBrand"
                        name="phoneBrand"
                        value={formData.phoneBrand}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.phoneBrand ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        required
                      >
                        <option value="" className="dark:bg-slate-800">Select phone brand...</option>
                        {PHONE_BRANDS.map((brand) => (
                          <option key={brand} value={brand} className="dark:bg-slate-800">
                            {brand}
                          </option>
                        ))}
                      </select>
                      {errors.phoneBrand && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phoneBrand}</p>
                      )}
                    </div>

                    {/* Phone Model */}
                    <div>
                      <label htmlFor="phoneModel" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Model <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="phoneModel"
                        name="phoneModel"
                        value={formData.phoneModel}
                        onChange={handleChange}
                        placeholder="e.g., iPhone 13 Pro, Camon 19, Galaxy A53"
                        className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.phoneModel ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                        }`}
                        required
                      />
                      {errors.phoneModel && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phoneModel}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                        errors.serviceRequired ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                      }`}
                      required
                    >
                      <option value="" className="dark:bg-slate-800">Select the service you need...</option>
                      {FORM_SERVICES.map((srv) => (
                        <option key={srv} value={srv} className="dark:bg-slate-800">
                          {srv}
                        </option>
                      ))}
                    </select>
                    {errors.serviceRequired && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.serviceRequired}</p>
                    )}
                  </div>

                  {/* Describe the Problem */}
                  <div>
                    <label htmlFor="problemDescription" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Describe the Problem <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="problemDescription"
                      name="problemDescription"
                      rows={3}
                      value={formData.problemDescription}
                      onChange={handleChange}
                      placeholder="Please explain what happened (e.g., cracked screen, not charging, water damage, stuck on Apple logo, needs unlocking)..."
                      className={`w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors resize-y ${
                        errors.problemDescription ? 'border-red-500 bg-red-50/20' : 'border-slate-300 dark:border-slate-700'
                      }`}
                      required
                    />
                    {errors.problemDescription && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.problemDescription}</p>
                    )}
                  </div>
                </div>

                {/* Section 3: Preferences & Additional Notes */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
                    Follow-Up Preferences
                  </h3>

                  {/* Preferred Contact Method */}
                  <div>
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </span>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2.5 cursor-pointer py-1">
                        <input
                          type="radio"
                          name="preferredContactMethod"
                          value="Phone Call"
                          checked={formData.preferredContactMethod === 'Phone Call'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Phone Call</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer py-1">
                        <input
                          type="radio"
                          name="preferredContactMethod"
                          value="WhatsApp"
                          checked={formData.preferredContactMethod === 'WhatsApp'}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-600"
                        />
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">WhatsApp Message</span>
                      </label>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label htmlFor="additionalInformation" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Additional Information <span className="text-slate-400 dark:text-slate-500 text-[11px] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalInformation"
                      name="additionalInformation"
                      rows={2}
                      value={formData.additionalInformation}
                      onChange={handleChange}
                      placeholder="Any specific timing, previous repair attempts, or accessories brought with the phone..."
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors resize-y"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your details are securely transmitted to Richard Phone Solutions.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] text-base sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Wrench className="w-4 h-4" />
                        <span>Submit Repair Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </motion.div>
      </div>
    </section>
  );
};
