import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="hablamos" className="py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">¿Hablamos?</h2>
                <p className="text-gray-400 mt-2">¿Listo para empezar tu próximo proyecto? Conectemos.</p>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
            </div>

            <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-8">
                <a 
                    href="https://www.linkedin.com/in/patriciodominguez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    LinkedIn
                </a>

                <div className="flex items-center space-x-4 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:neuralclab@gmail.com" className="hover:text-indigo-400 transition-colors duration-300">
                        neuralclab@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;