import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "@/features/hooks/use-new-account";

import React from "react";

const NewAccountSheet = () => {
	const { isOpen, onClose, onOpen } = useNewAccount();
	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4">
				<SheetHeader>
					<SheetTitle>New Account</SheetTitle>
					<SheetDescription>
						Create a new account to track your transactions.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default NewAccountSheet;
