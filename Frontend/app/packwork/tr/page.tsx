import { Metadata } from 'next';
import Image from 'next/image';
import {
    ChevronDown, Check,
    Scale, ListTodo, Cloud, RefreshCw, Zap
} from 'lucide-react';
import Link from 'next/link';
import HeroHeadline from '../HeroHeadline';

export const metadata: Metadata = {
    title: 'Packwork | Akıllı Bavul Hazırlama Asistanı',
    description: 'Packwork, aşım ücretlerinden kurtulmanızı ve seyahatinize özel eşyaları asla unutmamanızı sağlayan akıllı asistanınızdır.',
};

export default function PackworkLanding() {
    return (
        <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-blue-200">

            {/* Product Hunt Launch Banner */}
            <div className="bg-[#DA552F] text-white px-4 py-3 text-center text-sm md:text-base font-medium flex justify-center items-center">
                <span>🎉 Product Hunt&apos;tayız! Geri bildirimleriniz ve desteğiniz bizim için çok değerli.</span>
                <a href="https://www.producthunt.com/products/packwork-smart-packing-list" target="_blank" rel="noopener noreferrer" className="ml-2 underline font-bold hover:text-white/80 transition">
                    İncele
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
                            <a href="#features" className="text-gray-600 hover:text-black transition">Özellikler</a>
                            <a href="#pro" className="text-gray-600 hover:text-black transition">Packwork PRO</a>
                            <a href="#faq" className="text-gray-600 hover:text-black transition">SSS</a>
                            <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">Geri Bildirim</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/packwork" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase">
                                EN
                            </Link>
                            <a href="#download" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                                Uygulamayı İndir
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
                <HeroHeadline phrases={[
                    "Daha Akıllıca Hazırlan.",
                    "Daha Hafif Seyahat Et.",
                    "Asla Unutma.",
                    "Ekstra Ücret Ödeme."
                ]} />
                <div className="flex justify-center items-center space-x-3 mb-8 mt-2 opacity-90 transition-opacity">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-[10px] overflow-hidden shadow-sm border border-gray-200/60">
                        <Image src="/packwork/Packwork-iOS-Default-1024x1024@1x.png" alt="Packwork Logo" width={44} height={44} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Packwork</span>
                    <span className="text-2xl md:text-3xl font-light text-gray-400 pl-2">ile</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-500 mb-4 max-w-3xl mx-auto font-light leading-relaxed mt-2">
                    Sıradan bir liste uygulaması değil! Valiziniz için ağırlık aşımlarını engelleyen, seyahatinize özel eşyaları hatırlayan akıllı hazırlık asistanınız.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* App Store Download Button */}
                    <a href="#" className="hover:scale-105 transition-transform flex items-center justify-center drop-shadow-lg opacity-90 hover:opacity-100 cursor-pointer w-[180px] h-[60px] sm:w-[200px] sm:h-[66px] overflow-hidden rounded-xl">
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
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Gerçek problemlere mükemmel çözümler.</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Ağır bagaj limitleriyle ve unutulan eşyalarla kolayca başa çıkın.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <FeatureCard
                            icon={<Scale />}
                            title="Havaalanına Gitmeden Limitleri Görün"
                            description="Havayolunuzu (THY, Pegasus, Emirates vb.) seçin ve Packwork kabin/kayıtlı bagaj limitlerinizi otomatik doldursun. Eşyaları görsel çantalara ekleyin ve anlık ağırlık takibi yapın."
                        />
                        <FeatureCard
                            icon={<ListTodo />}
                            title="Seyahatinizi Bilen Akıllı Liste"
                            description="Evcil hayvanla uçuş? Spor ekipmanı? Packwork size otomatik olarak yapmanız gerekenleri (örn. aşı kağıdı, bagaj bildirimi) listeleyerek özel durumlardaki stresi ortadan kaldırır."
                        />
                        <FeatureCard
                            icon={<RefreshCw />}
                            title="Gidiş ve Dönüşe Hazır"
                            description="Giderken hazırlanın, dönerken gerisini Packwork'e bırakın. Uçuşunuzdan bir gün önce listeniz dönüş için otomatik sıfırlanır, hiçbir eşyanızı otelde unutmazsınız."
                        />
                        <FeatureCard
                            icon={<Cloud />}
                            title="Kusursuz Apple Ekosistemi"
                            description="Özel iCloud senkronizasyonu tüm gezilerinizi Apple cihazlarınız arasında güvende tutar. Widgetlar ve Dynamic Island desteğiyle kilidi açmadan eşya işaretleyin."
                        />
                    </div>
                </div>
            </section>

            {/* How it works in steps */}
            <section className="py-32 bg-[#F5F5F7]" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">İyi bir seyahat asistanının yapması gereken her şey.</h2>
                        <p className="text-xl text-gray-500">Planlayın, hazırlanın ve kusursuzca yola çıkın.</p>
                    </div>

                    <div className="space-y-32">
                        <StepItem
                            step="1"
                            title="Kusursuz planınızı yapın"
                            description="Sıfırdan bir gezi oluşturun ya da İş Seyahati ve Yaz Tatili gibi şablonları kullanın. Giyimden elektroniğe, ağırlıkları önceden hesaplanmış 60'tan fazla hazır eşyayı çantanıza ekleyin."
                            imageSrc="/packwork/TR2.png"
                        />
                        <StepItem
                            step="2"
                            title="Zahmetsizce hazırlanın"
                            description="Eşyalarınızı bavula yerleştirdikçe yanlarındaki alanı işaretleyin. (Örn: 5 tişörtün 3'ü). Telefon kilidinizi bile açmadan Dynamic Island veya Kilit Ekranı üzerinden anında işaretleme yapın."
                            imageSrc="/packwork/TR 3.png"
                            reversed={true}
                        />
                        <StepItem
                            step="3"
                            title="Son kontrollerinizi yapın"
                            description="Sessiz geri bildirim döngüsünün tadını çıkarın. Packwork, seyahate hazırlıkta hangi eşyaları atladığınızı analiz ederek bir sonraki tatiliniz için çok daha akıllı ve yerinde öneriler sunar."
                            imageSrc="/packwork/TR 5.png"
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
                                Gelişmiş hava durumu tahminleri, limitsiz donanımlar ve tam özelleştirmelerle bavul hazırlamanın tam potansiyeline ulaşın.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-300">
                                <ProFeatureItem text="Gideceğiniz yerin anlık havasına göre akıllı giyim önerileri." />
                                <ProFeatureItem text="Seyahatinizi kapsayan canlı 5 günlük hava durumu rozetleri." />
                                <ProFeatureItem text="Her seyahat için birden fazla valiz (kabin, kayıtlı ve kişisel)." />
                                <ProFeatureItem text="Tek tıkla uygulanabilen hazır özel valiz şablonlarınız." />
                                <ProFeatureItem text="Kendi ikonlarınız ve ebatlarınızla sınırsız özel kategori/eşya yaratma." />
                                <ProFeatureItem text="Uygulamaya özel vurgu renkleri ve bağımsız Dark/Light modları." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <section className="py-24 bg-[#F5F5F7] text-center" id="download">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Daha hafif uçmaya hazır mısınız?</h2>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        Aniden çıkan havayolu ödemelerini ve evde unuttuğunuz eşya krizlerini bugün bitirin.
                    </p>
                    <div className="flex justify-center">
                        {/* App Store Download Button */}
                        <a href="#" className="hover:scale-105 transition-transform flex items-center justify-center drop-shadow-xl opacity-90 hover:opacity-100 mt-4 cursor-pointer w-[200px] h-[66px] sm:w-[240px] sm:h-[80px] overflow-hidden rounded-xl mx-auto">
                            <Image src="/packwork/download-appstore-logo.svg" alt="Download on the App Store" width={288} height={96} className="w-[120%] h-[120%] object-cover object-center block select-none pointer-events-none" draggable={false} />
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white" id="faq">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sıkça Sorulan Sorular</h2>
                    </div>
                    <div className="space-y-6">
                        <FaqItem question="Havayolumun limitlerini biliyor mu?" answer="Evet! Packwork; THY, Pegasus, AJet, SunExpress, Emirates gibi dev havayollarını destekler. Biletinize göre havayolunu seçtiğinizde bagaj ağırlık sınırları sistem tarafından otomatik atanır." />
                        <FaqItem question="Akıllı görev atama sistemi nasıl çalışıyor?" answer="Uçuş türünüze göre (evcil hayvan/spor vb.) Packwork listenize uyarıları otomatik entegre eder. Örneğin, köpeğinizle uçuyorsanız 'Aşı kağıdı, kimlik bildirimi onaylandı mı?' gibi kritik adımlar kendi kendine eklenir." />
                        <FaqItem question="Gidiş-Dönüş için de uygun mu?" answer="Kesinlikle! Giderken valizinizi kusursuz yapın, Packwork dönüş uçuşunuzdan hemen önce otelden çıkarken listeyi otomatik sıfırlar; böylece tatil dönüşü eşyalarınızı otele hediye etmemiş olursunuz." />
                        <FaqItem question="Telefonumun kilidini açmadan listemi düzenleyebilir miyim?" answer="Evet. Lock Screen / Home Screen araç takımları (widget) ve Apple Dynamic Island Live Activities sayesinde bir elinizde valiz varken anlık işaretleme yapabilirsiniz." />
                        <FaqItem question="Telefonlar arası senkronize oluyor mu?" answer="Evet. Tüm listeler, valizler ve verileriniz Apple ekosistemi üzerinden yüksek güvenlikli kişisel iCloud hesabınızla senkronizedir." />
                        <FaqItem question="Packwork PRO ekstra ne gibi detaylar veriyor?" answer="Packwork PRO çok gezenler için tasarlandı! Gidilecek lokasyona özel (hava koşullarına yönelik) kıyafet önerileri sunar, 5-günlük hava durumunu gösterir, ekstra bagaj tiplerine izin verir ve temayı bütünüyle kişiselleştirmenizi sağlar." />
                        <FaqItem
                            question="Yeni bir özellik önerebilir ya da hata bildirebilir miyim?"
                            answer={
                                <span>
                                    Evet! Topluluğumuzu sürekli dinliyoruz. Yeni fikirlerinizi iletmek, başkalarının fikirlerini oylamak ya da bir sorunu bize anında bildirmek için <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Geri Bildirim</a> panomuzu istediğiniz an ziyaret edebilirsiniz. Fikirlerinizle ilerlemek bizim için en büyük değerdir.
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
                        <a href="https://packwork.canny.io" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Özellik İsteyin</a>
                        <a href="https://www.efemesudiyeli.com/apps/packwork/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Gizlilik Politikası</a>
                        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Kullanım Şartları</a>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Packwork. Tüm hakları saklıdır.
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
                <div className="text-blue-600 font-bold text-sm tracking-widest uppercase">Adım {step}</div>
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
