import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
export default function Page() {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-x-4 pt-16">
					<h1 className="font-bold text-3xl text-muted-foreground">
						Welcome Back!
					</h1>
					<p className="text-base ">
						Log in or Create account to get back to your dashboard!
					</p>
				</div>
				<div className="flex items-center justify-center mt-8">
					<ClerkLoaded>
						<SignIn path="/sign-in" />;
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground"></Loader2>
					</ClerkLoading>
				</div>
			</div>
			<div className="h-full bg-blue-600 hidden lg:flex justify-center items-center">
				<Image src="/logo.svg" alt="logo" width={100} height={100} />
			</div>
		</div>
	);
}
