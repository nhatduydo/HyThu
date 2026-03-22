"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact({
    phone = "0896868145",
    displayPhone = "089 6868 145",
    name = "Hỷ Thư",
    qr = "/zalo.png"
}) {

    const copyPhone = () => {
        if (typeof navigator !== "undefined") {
            navigator.clipboard.writeText(phone);
            alert("Đã copy số Zalo!");
        }
    };

    return (
        <section className="bg-white py-10 md:py-16">
            <motion.div className="max-w-3xl mx-auto px-4">
                <div 
                    className="rounded-[1.5rem] p-8 shadow-xl border border-pink-100"
                    style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
                >



                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            {/* QR */}
                            <div className="flex flex-col items-center shrink-0">
                                <div 
                                className="p-3 rounded-xl border border-pink-100 shadow-sm mb-3"
                                style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
                            >
                                    <div className="w-40 h-40 bg-gray-50 flex items-center justify-center relative">
                                        <Image
                                            src={qr}
                                            alt="QR Code Zalo"
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[#0068FF]">
                                    <div className="w-6 h-6 bg-[#0068FF] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                        Z
                                    </div>
                                    <span className="font-bold text-sm text-gray-700">
                                        Quét mã QR
                                    </span>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="flex-1 text-center md:text-left pt-1 w-full">
                                <h3 className="font-bold text-[#8B2635] text-xl md:text-2xl uppercase mb-2">Đặt thiệp qua Zalo</h3>
                                <p className="text-sm text-gray-600 mb-5">Nhắn tin ngay để được tư vấn mẫu thiệp đẹp nhất!</p>

                                <div className="space-y-3">
                                    {/* Phone */}
                                    <div className="bg-white/80 border border-pink-100 rounded-lg px-4 py-3 flex items-center justify-between group/phone hover:bg-white hover:shadow-sm transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-pink-50 text-[#8B2635] flex items-center justify-center">
                                                <i className="pi pi-phone text-sm"></i>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Số Zalo</div>
                                                <div className="text-base font-bold text-gray-800 group-hover/phone:text-[#8B2635]">089 6868 145</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                if (typeof navigator !== 'undefined') navigator.clipboard.writeText('0896868145')
                                            }}
                                            className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 hover:text-[#8B2635] hover:bg-pink-50 flex items-center justify-center transition-colors"
                                            title="Copy"
                                        >
                                            <i className="pi pi-copy text-xs"></i>
                                        </button>
                                    </div>

                                    {/* Name */}
                                    <div className="bg-white/80 border border-gray-100 rounded-lg px-4 py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                                                <i className="pi pi-user text-sm"></i>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Tên Zalo</div>
                                                <div className="text-base font-bold text-gray-800 uppercase">Hỷ Thư</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button
                                        onClick={() => {
                                            if (typeof navigator !== 'undefined') {
                                                navigator.clipboard.writeText('0896868145');
                                                alert('Đã copy số Zalo!');
                                            }
                                        }}
                                        className="w-full bg-[#8B2635] hover:bg-[#7A222F] text-white text-sm font-bold py-3 rounded-lg uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all mt-2 flex items-center justify-center gap-2"
                                    >
                                        <i className="pi pi-copy"></i>
                                        Copy Số Zalo
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}