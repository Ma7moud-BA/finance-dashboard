"use client";

import { useUser } from "@clerk/nextjs";
const WelcomeMessage = () => {
	const { user, isLoaded } = useUser();
	console.log(user);
	return (
		<div className="space-y-2 mb-4">
			<h2 className="text-2xl lg:text-4xl text-white font-medium ">
				Welcome Back {isLoaded ? ", " : " "} {user?.firstName} 🙋‍♂️
			</h2>
			<p className="text-sm lg:text-base text-slate-200">
				{" "}
				This is your financial overview report
			</p>
		</div>
	);
};

export default WelcomeMessage;
