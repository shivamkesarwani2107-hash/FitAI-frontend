function Contact() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-3xl">

        <p className="font-bold text-lime-600">
          FITAI SUPPORT
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-5xl">
          Contact FitAI
        </h1>

        <p className="mt-3 text-slate-500">
          Have a question? Get in touch with us.
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 p-6">

          <div className="space-y-6">

            <div>
              <p className="text-sm text-slate-500">
                Email
              </p>

              <p className="mt-1 font-bold">
                support@fitai.com
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Support Hours
              </p>

              <p className="mt-1 font-bold">
                Monday - Saturday
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Response Time
              </p>

              <p className="mt-1 font-bold">
                Within 24-48 hours
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;