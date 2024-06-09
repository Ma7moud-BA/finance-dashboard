import React from "react";
import { HeaderLogo } from "@/components/header-logo";
import Navigation from "@/components/navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMessage from "@/components/welcome-message";
export const Header = () => {
	return (
		<header className="bg-gradient-to-b from-green-700 to-green-500 px-4 py-8 lg:14 pb-36">
			<div className="max-w-screen-2xl  mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<HeaderLogo />
						<Navigation />
					</div>
					<ClerkLoading>
						<Loader2 className="animate-spin text-slate-400 size-8" />
					</ClerkLoading>
					<ClerkLoaded>
						<UserButton afterSignOutUrl="/" />
					</ClerkLoaded>
				</div>
				<WelcomeMessage />
			</div>
		</header>
	);
};
