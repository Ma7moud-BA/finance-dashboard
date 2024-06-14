"use client";

import { useNewAccount } from "@/features/hooks/use-new-account";
import { Button } from "@/components/ui/button";
export default function Home() {
	const { isOpen, onClose, onOpen } = useNewAccount();

	return (
		<div>
			<Button onClick={onOpen}> Add an account</Button>
		</div>
	);
}
