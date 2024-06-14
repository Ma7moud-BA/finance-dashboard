"use client";

import { useMountedState } from "react-use";
import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import React from "react";

const SheetProvider = () => {
	// by default the sheet will be open so it will cause a hydration error so use useMountedState to only render the sheet on the client
	const isMounted = useMountedState();
	if (!isMounted) return null;
	return (
		<>
			<NewAccountSheet />
		</>
	);
};

export default SheetProvider;
