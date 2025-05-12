import Image from "next/image"

export default function CallPage() {
    return (
        <div className="relative min-h-screen bg-[#00FF00] flex flex-col items-center justify-center overflow-hidden">
            {/* Greek-inspired border with vines and twists - max 100px wide/high */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
      linear-gradient(to right, #E5D08F, #E5D08F),
      linear-gradient(to right, #E5D08F, #E5D08F),
      linear-gradient(to right, #E5D08F, #E5D08F),
      linear-gradient(to right, #E5D08F, #E5D08F)
    `,
                    backgroundPosition: "0 0, 0 100%, 0 0, 100% 0",
                    backgroundSize: "100% 100px, 100% 100px, 100px 100%, 100px 100%",
                    backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
                }}
            />

            {/* Animated vine pattern overlay for the border */}
            <div
                className="absolute inset-0 pointer-events-none animate-vine-breath"
                style={{
                    maskImage: `
      linear-gradient(to right, black, black),
      linear-gradient(to right, black, black),
      linear-gradient(to right, black, black),
      linear-gradient(to right, black, black)
    `,
                    maskPosition: "0 0, 0 100%, 0 0, 100% 0",
                    maskSize: "100% 100px, 100% 100px, 100px 100%, 100px 100%",
                    maskRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cstyle%3E%0A    @keyframes dash %7B%0A      to %7B%0A        stroke-dashoffset: 0;%0A      %7D%0A    %7D%0A    path %7B%0A      stroke-dasharray: 500;%0A      stroke-dashoffset: 500;%0A      animation: dash 4s ease-out forwards;%0A    %7D%0A    path:nth-child(2) %7B%0A      animation-delay: 0.3s;%0A    %7D%0A    path:nth-child(3) %7B%0A      animation-delay: 0.6s;%0A    %7D%0A    path:nth-child(4) %7B%0A      animation-delay: 0.9s;%0A    %7D%0A    path:nth-child(5) %7B%0A      animation-delay: 1.2s;%0A    %7D%0A  %3C/style%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='8' strokeLinecap='round' d='M10,100 Q30,60 50,100 T90,100 T130,100 T170,100 M30,20 Q70,0 100,30 T170,60 M30,180 Q70,200 100,170 T170,140'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='7' d='M0,40 Q40,20 60,50 Q80,80 100,50 Q120,20 140,50 Q160,80 180,50 Q200,20 220,40'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='7' d='M0,160 Q40,140 60,170 Q80,200 100,170 Q120,140 140,170 Q160,200 180,170 Q200,140 220,160'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M20,0 Q0,40 30,60 Q60,80 30,100 Q0,120 30,140 Q60,160 30,180 Q0,200 20,220'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M180,0 Q200,40 170,60 Q140,80 170,100 Q200,120 170,140 Q140,160 170,180 Q200,200 180,220'/%3E%3Cpath fill='none' stroke='%23E5D08F' strokeWidth='4' strokeDasharray='5,5' d='M20,10 Q60,30 80,10 Q100,-10 120,10 Q140,30 180,10 M20,190 Q60,170 80,190 Q100,210 120,190 Q140,170 180,190 M10,20 Q30,60 10,80 Q-10,100 10,120 Q30,140 10,180 M190,20 Q170,60 190,80 Q210,100 190,120 Q170,140 190,180'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "repeat",
                }}
            />

            {/* Corner vine decorations with animations */}
            <div
                className="absolute top-0 left-0 w-[100px] h-[100px] pointer-events-none animate-vine-sway"
                style={{ animationDelay: "0s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 300; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes pulse %7B%0A      0%25, 100%25 %7B stroke-width: 6; %7D%0A      50%25 %7B stroke-width: 8; %7D%0A    %7D%0A    path:nth-child(1) %7B%0A      stroke-dasharray: 300;%0A      stroke-dashoffset: 300;%0A      animation: grow 1.5s ease-out forwards, pulse 4s ease-in-out infinite;%0A    %7D%0A    path:nth-child(2) %7B%0A      stroke-dasharray: 200;%0A      stroke-dashoffset: 200;%0A      animation: grow 1.5s 0.3s ease-out forwards, pulse 4s 0.5s ease-in-out infinite;%0A    %7D%0A    path:nth-child(3) %7B%0A      stroke-dasharray: 150;%0A      stroke-dashoffset: 150;%0A      animation: grow 1.5s 0.6s ease-out forwards, pulse 4s 1s ease-in-out infinite;%0A    %7D%0A  %3C/style%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M0,0 C30,10 40,30 30,50 C20,70 30,80 50,90 C70,100 90,90 100,100'/%3E%3Cpath fill='none' stroke='%23E5D08F' strokeWidth='5' d='M10,10 C35,15 45,35 35,55 C25,75 35,85 55,90'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='4' d='M15,0 C25,20 15,40 25,60 C35,80 55,85 70,75'/%3E%3C/svg%3E")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute top-0 right-0 w-[100px] h-[100px] pointer-events-none animate-vine-sway"
                style={{ animationDelay: "0.5s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 300; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes pulse %7B%0A      0%25, 100%25 %7B stroke-width: 6; %7D%0A      50%25 %7B stroke-width: 8; %7D%0A    %7D%0A    path:nth-child(1) %7B%0A      stroke-dasharray: 300;%0A      stroke-dashoffset: 300;%0A      animation: grow 1.5s ease-out forwards, pulse 4s ease-in-out infinite;%0A    %7D%0A    path:nth-child(2) %7B%0A      stroke-dasharray: 200;%0A      stroke-dashoffset: 200;%0A      animation: grow 1.5s 0.3s ease-out forwards, pulse 4s 0.5s ease-in-out infinite;%0A    %7D%0A    path:nth-child(3) %7B%0A      stroke-dasharray: 150;%0A      stroke-dashoffset: 150;%0A      animation: grow 1.5s 0.6s ease-out forwards, pulse 4s 1s ease-in-out infinite;%0A    %7D%0A  %3C/style%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M100,0 C70,10 60,30 70,50 C80,70 70,80 50,90 C30,100 10,90 0,100'/%3E%3Cpath fill='none' stroke='%23E5D08F' strokeWidth='5' d='M90,10 C65,15 55,35 65,55 C75,75 65,85 45,90'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='4' d='M85,0 C75,20 85,40 75,60 C65,80 45,85 30,75'/%3E%3C/svg%3E")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute bottom-0 left-0 w-[100px] h-[100px] pointer-events-none animate-vine-sway"
                style={{ animationDelay: "1s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 300; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes pulse %7B%0A      0%25, 100%25 %7B stroke-width: 6; %7D%0A      50%25 %7B stroke-width: 8; %7D%0A    %7D%0A    path:nth-child(1) %7B%0A      stroke-dasharray: 300;%0A      stroke-dashoffset: 300;%0A      animation: grow 1.5s ease-out forwards, pulse 4s ease-in-out infinite;%0A    %7D%0A    path:nth-child(2) %7B%0A      stroke-dasharray: 200;%0A      stroke-dashoffset: 200;%0A      animation: grow 1.5s 0.3s ease-out forwards, pulse 4s 0.5s ease-in-out infinite;%0A    %7D%0A    path:nth-child(3) %7B%0A      stroke-dasharray: 150;%0A      stroke-dashoffset: 150;%0A      animation: grow 1.5s 0.6s ease-out forwards, pulse 4s 1s ease-in-out infinite;%0A    %7D%0A  %3C/style%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M0,100 C30,90 40,70 30,50 C20,30 30,20 50,10 C70,0 90,10 100,0'/%3E%3Cpath fill='none' stroke='%23E5D08F' strokeWidth='5' d='M10,90 C35,85 45,65 35,45 C25,25 35,15 55,10'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='4' d='M15,100 C25,80 15,60 25,40 C35,20 55,15 70,25'/%3E%3C/svg%3E")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute bottom-0 right-0 w-[100px] h-[100px] pointer-events-none animate-vine-sway"
                style={{ animationDelay: "1.5s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 300; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes pulse %7B%0A      0%25, 100%25 %7B stroke-width: 6; %7D%0A      50%25 %7B stroke-width: 8; %7D%0A    %7D%0A    path:nth-child(1) %7B%0A      stroke-dasharray: 300;%0A      stroke-dashoffset: 300;%0A      animation: grow 1.5s ease-out forwards, pulse 4s ease-in-out infinite;%0A    %7D%0A    path:nth-child(2) %7B%0A      stroke-dasharray: 200;%0A      stroke-dashoffset: 200;%0A      animation: grow 1.5s 0.3s ease-out forwards, pulse 4s 0.5s ease-in-out infinite;%0A    %7D%0A    path:nth-child(3) %7B%0A      stroke-dasharray: 150;%0A      stroke-dashoffset: 150;%0A      animation: grow 1.5s 0.6s ease-out forwards, pulse 4s 1s ease-in-out infinite;%0A    %7D%0A  %3C/style%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='6' d='M100,100 C70,90 60,70 70,50 C80,30 70,20 50,10 C30,0 10,10 0,0'/%3E%3Cpath fill='none' stroke='%23E5D08F' strokeWidth='5' d='M90,90 C65,85 55,65 65,45 C75,25 65,15 45,10'/%3E%3Cpath fill='none' stroke='%23D62828' strokeWidth='4' d='M85,100 C75,80 85,60 75,40 C65,20 45,15 30,25'/%3E%3C/svg%3E")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            {/* Animated vines along the edges */}
            <div
                className="absolute top-0 left-[100px] right-[100px] h-[100px] pointer-events-none animate-vine-wiggle"
                style={{ animationDelay: "0.2s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100' viewBox='0 0 400 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 1000; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes sway %7B%0A      0%25, 100%25 %7B transform: translateY(0); %7D%0A      50%25 %7B transform: translateY(3px); %7D%0A    %7D%0A    path %7B%0A      stroke-dasharray: 1000;%0A      stroke-dashoffset: 1000;%0A      animation: grow 3s ease-out forwards;%0A      transform-origin: center;%0A      animation-fill-mode: forwards;%0A    %7D%0A    #vine1 %7B animation-delay: 0s; %7D%0A    #vine2 %7B animation-delay: 0.3s; %7D%0A    #vine3 %7B animation-delay: 0.6s; %7D%0A    #leaf1, #leaf2, #leaf3, #leaf4, #leaf5 %7B%0A      animation: sway 4s ease-in-out infinite;%0A    %7D%0A    #leaf1 %7B animation-delay: 0s; %7D%0A    #leaf2 %7B animation-delay: 0.5s; %7D%0A    #leaf3 %7B animation-delay: 1s; %7D%0A    #leaf4 %7B animation-delay: 1.5s; %7D%0A    #leaf5 %7B animation-delay: 2s; %7D%0A  %3C/style%3E%3Cpath id='vine1' fill='none' stroke='%23D62828' strokeWidth='7' d='M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,80 450,50'/%3E%3Cpath id='vine2' fill='none' stroke='%23E5D08F' strokeWidth='6' d='M0,70 C50,40 100,100 150,70 C200,40 250,100 300,70 C350,40 400,100 450,70'/%3E%3Cpath id='vine3' fill='none' stroke='%23D62828' strokeWidth='5' d='M0,30 C50,0 100,60 150,30 C200,0 250,60 300,30 C350,0 400,60 450,30'/%3E%3Cpath id='leaf1' fill='%23D62828' d='M75,50 C80,45 85,45 90,50 C85,55 80,55 75,50 Z'/%3E%3Cpath id='leaf2' fill='%23D62828' d='M175,30 C180,25 185,25 190,30 C185,35 180,35 175,30 Z'/%3E%3Cpath id='leaf3' fill='%23D62828' d='M225,70 C230,65 235,65 240,70 C235,75 230,75 225,70 Z'/%3E%3Cpath id='leaf4' fill='%23D62828' d='M325,50 C330,45 335,45 340,50 C335,55 330,55 325,50 Z'/%3E%3Cpath id='leaf5' fill='%23D62828' d='M375,30 C380,25 385,25 390,30 C385,35 380,35 375,30 Z'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute bottom-0 left-[100px] right-[100px] h-[100px] pointer-events-none animate-vine-wiggle"
                style={{ animationDelay: "0.7s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100' viewBox='0 0 400 100'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 1000; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes sway %7B%0A      0%25, 100%25 %7B transform: translateY(0); %7D%0A      50%25 %7B transform: translateY(-3px); %7D%0A    %7D%0A    path %7B%0A      stroke-dasharray: 1000;%0A      stroke-dashoffset: 1000;%0A      animation: grow 3s ease-out forwards;%0A      transform-origin: center;%0A      animation-fill-mode: forwards;%0A    %7D%0A    #vine1 %7B animation-delay: 0s; %7D%0A    #vine2 %7B animation-delay: 0.3s; %7D%0A    #vine3 %7B animation-delay: 0.6s; %7D%0A    #leaf1, #leaf2, #leaf3, #leaf4, #leaf5 %7B%0A      animation: sway 4s ease-in-out infinite;%0A    %7D%0A    #leaf1 %7B animation-delay: 0s; %7D%0A    #leaf2 %7B animation-delay: 0.5s; %7D%0A    #leaf3 %7B animation-delay: 1s; %7D%0A    #leaf4 %7B animation-delay: 1.5s; %7D%0A    #leaf5 %7B animation-delay: 2s; %7D%0A  %3C/style%3E%3Cpath id='vine1' fill='none' stroke='%23D62828' strokeWidth='7' d='M0,50 C50,80 100,20 150,50 C200,80 250,20 300,50 C350,80 400,20 450,50'/%3E%3Cpath id='vine2' fill='none' stroke='%23E5D08F' strokeWidth='6' d='M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30'/%3E%3Cpath id='vine3' fill='none' stroke='%23D62828' strokeWidth='5' d='M0,70 C50,100 100,40 150,70 C200,100 250,40 300,70 C350,100 400,40 450,70'/%3E%3Cpath id='leaf1' fill='%23D62828' d='M75,50 C80,45 85,45 90,50 C85,55 80,55 75,50 Z'/%3E%3Cpath id='leaf2' fill='%23D62828' d='M175,70 C180,65 185,65 190,70 C185,75 180,75 175,70 Z'/%3E%3Cpath id='leaf3' fill='%23D62828' d='M225,30 C230,25 235,25 240,30 C235,35 230,35 225,30 Z'/%3E%3Cpath id='leaf4' fill='%23D62828' d='M325,50 C330,45 335,45 340,50 C335,55 330,55 325,50 Z'/%3E%3Cpath id='leaf5' fill='%23D62828' d='M375,70 C380,65 385,65 390,70 C385,75 380,75 375,70 Z'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute left-0 top-[100px] bottom-[100px] w-[100px] pointer-events-none animate-vine-wiggle"
                style={{ animationDelay: "1.2s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='400' viewBox='0 0 100 400'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 1000; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes sway %7B%0A      0%25, 100%25 %7B transform: translateX(0); %7D%0A      50%25 %7B transform: translateX(3px); %7D%0A    %7D%0A    path %7B%0A      stroke-dasharray: 1000;%0A      stroke-dashoffset: 1000;%0A      animation: grow 3s ease-out forwards;%0A      transform-origin: center;%0A      animation-fill-mode: forwards;%0A    %7D%0A    #vine1 %7B animation-delay: 0s; %7D%0A    #vine2 %7B animation-delay: 0.3s; %7D%0A    #vine3 %7B animation-delay: 0.6s; %7D%0A    #leaf1, #leaf2, #leaf3, #leaf4, #leaf5 %7B%0A      animation: sway 4s ease-in-out infinite;%0A    %7D%0A    #leaf1 %7B animation-delay: 0s; %7D%0A    #leaf2 %7B animation-delay: 0.5s; %7D%0A    #leaf3 %7B animation-delay: 1s; %7D%0A    #leaf4 %7B animation-delay: 1.5s; %7D%0A    #leaf5 %7B animation-delay: 2s; %7D%0A  %3C/style%3E%3Cpath id='vine1' fill='none' stroke='%23D62828' strokeWidth='7' d='M50,0 C20,50 80,100 50,150 C20,200 80,250 50,300 C20,350 80,400 50,450'/%3E%3Cpath id='vine2' fill='none' stroke='%23E5D08F' strokeWidth='6' d='M70,0 C40,50 100,100 70,150 C40,200 100,250 70,300 C40,350 100,400 70,450'/%3E%3Cpath id='vine3' fill='none' stroke='%23D62828' strokeWidth='5' d='M30,0 C0,50 60,100 30,150 C0,200 60,250 30,300 C0,350 60,400 30,450'/%3E%3Cpath id='leaf1' fill='%23D62828' d='M50,75 C45,80 45,85 50,90 C55,85 55,80 50,75 Z'/%3E%3Cpath id='leaf2' fill='%23D62828' d='M30,175 C25,180 25,185 30,190 C35,185 35,180 30,175 Z'/%3E%3Cpath id='leaf3' fill='%23D62828' d='M70,225 C65,230 65,235 70,240 C75,235 75,230 70,225 Z'/%3E%3Cpath id='leaf4' fill='%23D62828' d='M50,325 C45,330 45,335 50,340 C55,335 55,330 50,325 Z'/%3E%3Cpath id='leaf5' fill='%23D62828' d='M70,375 C75,380 75,385 70,390 C65,385 65,380 70,375 Z'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>

            <div
                className="absolute right-0 top-[100px] bottom-[100px] w-[100px] pointer-events-none animate-vine-wiggle"
                style={{ animationDelay: "1.7s" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='400' viewBox='0 0 100 400'%3E%3Cstyle%3E%0A    @keyframes grow %7B%0A      0%25 %7B stroke-dashoffset: 1000; %7D%0A      100%25 %7B stroke-dashoffset: 0; %7D%0A    %7D%0A    @keyframes sway %7B%0A      0%25, 100%25 %7B transform: translateX(0); %7D%0A      50%25 %7B transform: translateX(-3px); %7D%0A    %7D%0A    path %7B%0A      stroke-dasharray: 1000;%0A      stroke-dashoffset: 1000;%0A      animation: grow 3s ease-out forwards;%0A      transform-origin: center;%0A      animation-fill-mode: forwards;%0A    %7D%0A    #vine1 %7B animation-delay: 0s; %7D%0A    #vine2 %7B animation-delay: 0.3s; %7D%0A    #vine3 %7B animation-delay: 0.6s; %7D%0A    #leaf1, #leaf2, #leaf3, #leaf4, #leaf5 %7B%0A      animation: sway 4s ease-in-out infinite;%0A    %7D%0A    #leaf1 %7B animation-delay: 0s; %7D%0A    #leaf2 %7B animation-delay: 0.5s; %7D%0A    #leaf3 %7B animation-delay: 1s; %7D%0A    #leaf4 %7B animation-delay: 1.5s; %7D%0A    #leaf5 %7B animation-delay: 2s; %7D%0A  %3C/style%3E%3Cpath id='vine1' fill='none' stroke='%23D62828' strokeWidth='7' d='M50,0 C80,50 20,100 50,150 C80,200 20,250 50,300 C80,350 20,400 50,450'/%3E%3Cpath id='vine2' fill='none' stroke='%23E5D08F' strokeWidth='6' d='M30,0 C60,50 0,100 30,150 C60,200 0,250 30,300 C60,350 0,400 30,450'/%3E%3Cpath id='vine3' fill='none' stroke='%23D62828' strokeWidth='5' d='M70,0 C100,50 40,100 70,150 C100,200 40,250 70,300 C100,350 40,400 70,450'/%3E%3Cpath id='leaf1' fill='%23D62828' d='M50,75 C55,80 55,85 50,90 C45,85 45,80 50,75 Z'/%3E%3Cpath id='leaf2' fill='%23D62828' d='M70,175 C75,180 75,185 70,190 C65,185 65,180 70,175 Z'/%3E%3Cpath id='leaf3' fill='%23D62828' d='M30,225 C35,230 35,235 30,240 C25,235 25,230 30,225 Z'/%3E%3Cpath id='leaf4' fill='%23D62828' d='M50,325 C55,330 55,335 50,340 C45,335 45,330 50,325 Z'/%3E%3Cpath id='leaf5' fill='%23D62828' d='M70,375 C75,380 75,385 70,390 C65,385 65,380 70,375 Z'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>


            {/* Avatar and character name in top left */}
            <div className="absolute top-16 left-16 z-20 flex flex-col items-center">
                <div className="w-[400px] h-[711px] bg-[#E5D08F] border-4 border-[#D62828] rounded-lg overflow-hidden relative">
                    <Image
                        src="/avatr.png"
                        alt="D&D Character Avatar"
                        fill
                        className="object-cover absolute inset-0"
                    />
                </div>
                <div className="mt-4 bg-[#E5D08F] border-2 border-[#D62828] rounded-md px-6 py-2 transform -rotate-2">
                    <h2 className="text-xl font-medieval text-[#D62828] font-bold">Calix the Doomed (Kal)</h2>
                </div>
                <div className="mt-2 bg-[#E5D08F] border-2 border-[#D62828] rounded-md px-6 py-1 transform rotate-1">
                    <h3 className="text-lg font-medieval text-[#D62828]">
                        Level: <span className="font-bold">1</span>
                    </h3>
                </div>
            </div>

            {/* Big red hand icon in top right corner with enhanced pulsing animation */}
            <div className="absolute top-16 right-16 z-20">
                <div className="w-24 h-24 bg-[#D62828] rounded-full flex items-center justify-center animate-pulse-hand">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E5D08F" className="w-16 h-16">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
