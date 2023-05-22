import { useConnectionStatus } from "@thirdweb-dev/react";
import { createContext, useState, useEffect } from "react";




interface ChildrenType {
    children: React.ReactNode
}

export const WalletConnectionContext = createContext({});


export const WalletConnectionContextProvider = ({ children }: ChildrenType) => {

    //checking wallet status
    const [isWalletConnected, setWalletConnectionStatus] = useState(false);
    const connectionStatus = useConnectionStatus();
    useEffect(() => {
        if (connectionStatus == 'connected') {
            setWalletConnectionStatus(true);
        }
        else {
            setWalletConnectionStatus(false);
        }
    }, [connectionStatus])





    return <WalletConnectionContext.Provider value={{
        isWalletConnected
    }}>
        {children}
    </WalletConnectionContext.Provider>
}