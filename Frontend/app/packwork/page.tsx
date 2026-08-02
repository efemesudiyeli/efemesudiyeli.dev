import { Metadata } from 'next';
import Image from 'next/image';
import {
    ChevronDown, Check,
    Scale, ListTodo, Cloud, RefreshCw, Zap
} from 'lucide-react';
import Link from 'next/link';
import HeroHeadline from './HeroHeadline';

export const metadata: Metadata = {
    title: 'Packwork | The Intelligent Packing Assistant',
    description: 'Packwork helps you prevent overweight bags and forgotten gear tailored to your specific trip.',
};

export default function PackworkLanding() {
    return (
        <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-blue-200">

            {/* Product Hunt Launch Banner */}
            <div className="bg-[#DA552F] text-white px-4 py-3 text-center text-sm md:text-base font-medium flex justify-center items-center">
                <span>🎉 We are live on Product Hunt! We&apos;d love your feedback and support.</span>
                <a href="https://www.producthunt.com/products/packwork-smart-packing-list" target="_blank" rel="noopener noreferrer" className="ml-2 underline font-bold hover:text-white/80 transition">
                    Check it out
                </a>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-md border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-[8px] overflow-hidden shadow-sm">
                                <Image src="/packwork/Packwork-iOS-Default-1024x1024@1x.png" alt="Packwork Logo" width={32} height={32} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-semibold text-lg tracking-tight">Packwork</span>
                        </div>
                        <div className="hidden md:flex space-x-8 text-sm font-medium">
                            <a href="#features" className="text-gray-600 hover:text-black transition">Features</a>
                            <a href="#pro" className="text-gray-600 hover:text-black transition">Packwork Pro</a>
                            <a href="#faq" className="text-gray-600 hover:text-black transition">FAQ</a>
                            <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">Feedback</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/packwork/tr" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase">
                                TR
                            </Link>
                            <a href="#download" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                                Get the App
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
                <HeroHeadline phrases={[
                    "Pack Smarter.",
                    "Travel Lighter.",
                    "Never Forget.",
                    "Avoid Fees."
                ]} />
                <div className="flex justify-center items-center space-x-3 mb-8 mt-2 opacity-90 transition-opacity">
                    <span className="text-2xl md:text-3xl font-light text-gray-400">with</span>
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-[10px] overflow-hidden shadow-sm border border-gray-200/60">
                        <Image src="/packwork/Packwork-iOS-Default-1024x1024@1x.png" alt="Packwork Logo" width={44} height={44} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Packwork</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-500 mb-4 max-w-3xl mx-auto font-light leading-relaxed mt-2">
                    Not just a checklist - an intelligent packing assistant that prevents overweight bags and remembers the gear specific to your trip.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* App Store Download Button */}
                    <a href="https://apps.apple.com/us/app/packwork-smart-packing-list/id6780204756" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center justify-center drop-shadow-lg opacity-90 hover:opacity-100 cursor-pointer w-[180px] h-[60px] sm:w-[200px] sm:h-[66px] overflow-hidden rounded-xl">
                        <Image src="/packwork/download-appstore-logo.svg" alt="Download on the App Store" width={216} height={72} className="w-[120%] h-[120%] object-cover object-center block select-none pointer-events-none" draggable={false} />
                    </a>

                    {/* Product Hunt Embed Badge */}
                    <a href="https://www.producthunt.com/products/packwork-smart-packing-list?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-packwork-smart-packing-list" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center justify-center opacity-95 hover:opacity-100 cursor-pointer h-[60px] sm:h-[66px]">
                        <Image
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1211794&theme=light&t=1785520953770"
                            alt="Packwork: Smart Packing List - Pack smarter, travel lighter, never forget anything! | Product Hunt"
                            width={250}
                            height={54}
                            className="h-full w-auto block select-none pointer-events-none drop-shadow-sm"
                            draggable={false}
                            unoptimized
                        />
                    </a>
                </div>

            </section>

            {/* Feature Grids */}
            <section className="py-24 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built around real packing problems.</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tackle overweight baggage limits and forgotten niche gear with ease.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <FeatureCard
                            icon={<Scale />}
                            title="Weigh In Before The Airport Does"
                            description="Pick your airline (Turkish Airlines, Pegasus, Emirates, etc.) and Packwork auto-fills real cabin & checked-bag weight limits. Drag items into visual compartments and watch the live weight gauge."
                        />
                        <FeatureCard
                            icon={<ListTodo />}
                            title="A Checklist That Knows Your Trip"
                            description="Flying with a pet? Sports gear? Fragile items? Packwork auto-seeds your list with specific documents and steps required. Dismiss what doesn't apply, and it stays dismissed."
                        />
                        <FeatureCard
                            icon={<RefreshCw />}
                            title="Round Trip Ready"
                            description="Pack once for the way there. Packwork automatically resets your list for the flight home a day before departure, so you can repack your luggage and never leave anything behind."
                        />
                        <FeatureCard
                            icon={<Cloud />}
                            title="Seamless Apple Ecosystem"
                            description="Private iCloud sync keeps your trips, luggage, and catalog updated across all your Apple devices. Plus, enjoy Home/Lock Screen Widgets and Dynamic Island Live Activities."
                        />
                    </div>
                </div>
            </section>

            {/* How it works in steps */}
            <section className="py-32 bg-[#F5F5F7]" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything a good packing app should do.</h2>
                        <p className="text-xl text-gray-500">Plan, pack, and review seamlessly.</p>
                    </div>

                    <div className="space-y-32">
                        <StepItem
                            step="1"
                            title="Plan your perfect trip"
                            description="Start blank or use templates like Business Trip or Beach Holiday. Utilize our 60+ built-in catalog items with estimated weights across Clothing, Electronics, Toiletries, and more."
                            imageSrc="/packwork/EN 2.png"
                        />
                        <StepItem
                            step="2"
                            title="Pack effortlessly"
                            description="Switch to Pack mode to check items off as you go. Track partial packing (e.g., 3 of 5 T-shirts). Toggle items directly from your Lock Screen or Dynamic Island without unlocking your phone."
                            imageSrc="/packwork/EN 3.png"
                            reversed={true}
                        />
                        <StepItem
                            step="3"
                            title="Review and improve"
                            description="Enjoy a quiet feedback loop. Packwork learns what you skip and asks what stayed in your bag post-trip, so your future packing suggestions get smarter."
                            imageSrc="/packwork/EN 5.png"
                        />
                    </div>
                </div>
            </section>

            {/* Packwork PRO Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="pro">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-black text-white rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Zap className="w-64 h-64" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">PRO</div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Packwork PRO</h2>
                            </div>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl font-light">
                                Unlock the full potential of intelligent packing with advanced suggestions, real-time weather integration, and ultimate customization.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-300">
                                <ProFeatureItem text="Smart Suggestions based on weather and your packing history." />
                                <ProFeatureItem text="Live weather chip pulling 5-day forecasts around your departure." />
                                <ProFeatureItem text="Multiple bags per trip (cabin, checked, and personal items)." />
                                <ProFeatureItem text="Custom packing presets applied with one tap." />
                                <ProFeatureItem text="Custom categories and items with your own icons and weights." />
                                <ProFeatureItem text="Accent color themes and independent light/dark modes." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="py-24 bg-[#F5F5F7] text-center" id="download">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to travel lighter?</h2>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        Stop paying overweight fees and forgetting your essentials.
                    </p>
                    <div className="flex justify-center">
                        {/* App Store Download Button */}
                        <a href="https://apps.apple.com/us/app/packwork-smart-packing-list/id6780204756" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center justify-center drop-shadow-xl opacity-90 hover:opacity-100 mt-4 cursor-pointer w-[200px] h-[66px] sm:w-[240px] sm:h-[80px] overflow-hidden rounded-xl mx-auto">
                            <Image src="/packwork/download-appstore-logo.svg" alt="Download on the App Store" width={288} height={96} className="w-[120%] h-[120%] object-cover object-center block select-none pointer-events-none" draggable={false} />
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white" id="faq">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        <FaqItem question="Does it know the baggage limit for my airline?" answer="Yes! Packwork supports major airlines like Turkish Airlines, Pegasus, AJet, SunExpress, Lufthansa, and Emirates. When you select your airline, it automatically fills in the real cabin and checked baggage weight limits." />
                        <FaqItem question="How does the smart checklist work?" answer="Depending on your trip, Packwork auto-seeds your list with specific required steps. For example, if you're flying with a pet, sports gear, or fragile items, it will remind you of vaccination records or oversized-item check-in procedures." />
                        <FaqItem question="Can I use it for round trips?" answer="Absolutely! Pack once for the way there, and Packwork will automatically reset your list for the flight home a day before your departure, ensuring you never leave anything behind." />
                        <FaqItem question="Can I check off items without unlocking my phone?" answer="Yes. With Apple's Dynamic Island Live Activities and Lock / Home Screen Widgets, you can easily toggle packed items directly from your screen." />
                        <FaqItem question="Does it sync across my devices?" answer="Yes. Packwork uses private iCloud sync to keep your trips, luggage, and item catalog securely synced across all your Apple devices." />
                        <FaqItem question="What additional features does Packwork PRO offer?" answer="Packwork PRO is designed for frequent travelers. It includes smart suggestions based on real-time weather and personal packing history, live 5-day weather chips, multiple bags (cabin & checked) per trip, and complete customization of item categories." />
                        <FaqItem
                            question="Can I suggest a new feature or report a bug?"
                            answer={
                                <span>
                                    Yes! We actively listen to our community. You can visit our <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Feedback Board</a> to suggest new features, vote on existing ideas from other users, or report any issues. Your input directly shapes the future development of Packwork!
                                </span>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#F5F5F7] py-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-7 h-7 rounded-md overflow-hidden shadow-sm flex-shrink-0">
                            <Image src="/packwork/Packwork-iOS-Default-1024x1024@1x.png" alt="Packwork Logo" width={28} height={28} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-semibold text-lg tracking-tight text-gray-800">Packwork</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Request a Feature</a>
                        <a href="https://www.efemesudiyeli.com/apps/packwork/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Privacy Policy</a>
                        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Terms of Use</a>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Packwork. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Components
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-[#F5F5F7] p-8 md:p-10 rounded-[32px] hover:shadow-lg transition duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-gray-50">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">{description}</p>
        </div>
    );
}

function StepItem({ step, title, description, imageSrc, reversed = false }: { step: string, title: string, description: string, imageSrc: string, reversed?: boolean }) {
    return (
        <div className={`flex flex-col md:flex-row items-center justify-between gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 space-y-6">
                <div className="text-blue-600 font-bold text-sm tracking-widest uppercase">Step {step}</div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h3>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">{description}</p>
            </div>
            <div className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-[220px] md:max-w-[250px] flex items-center justify-center">
                    <Image src={imageSrc} alt={title} width={600} height={1200} className="w-full h-auto drop-shadow-2xl rounded-[2.5rem] object-contain" />
                </div>
            </div>
        </div>
    );
}

function ProFeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0 text-yellow-400">
                <Check className="w-5 h-5" />
            </div>
            <span className="leading-snug text-gray-300 font-medium">{text}</span>
        </div>
    );
}

function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
    return (
        <details className="group border-b border-gray-200 pb-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer list-none py-2 gap-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">{question}</h3>
                <span className="relative flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-open:bg-gray-100 transition-colors duration-200">
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" />
                </span>
            </summary>
            <p className="text-gray-500 mt-4 leading-relaxed pr-10 font-medium">{answer}</p>
        </details>
    );
}
