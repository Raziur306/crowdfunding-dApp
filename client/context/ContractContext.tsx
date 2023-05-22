import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import React, { ReactNode, createContext, useState } from "react";



export const ContractContext = createContext({});


interface ChildrenType {
    children: ReactNode
}

export const ContractContextProvider = ({ children }: ChildrenType) => {
    const _owner = useAddress();

    const address = process.env.NEXT_PUBLIC_CONTRACT_KEY;
    const { contract } = useContract(address);




    //create campaign
    const { mutateAsync: createCampaign, isLoading: isCreateCampaignLoading } = useContractWrite(contract, "createCampaign");
    const createCampaignCall = async (_title: String, _description: String, _target: String, _deadline: any, _image: String) => {
        console.log("Called")
        try {

            const target = ethers.utils.parseEther(_target.toString());
            const data = await createCampaign({ args: [_owner, _title, _description, target, new Date(_deadline).getTime(), _image] });
            // console.info("Number of campaigns", data);
        } catch (error) {
            console.error("contract Create Campaign failure", error);
        }
    }



    //donate to campaign
    const { mutateAsync: donateToCampaign, isLoading: isDonateLoading } = useContractWrite(contract, "donateToCampaign")
    const donateCampaignCall = async (_id: string) => {
        try {
            const data = await donateToCampaign({ args: [_id] });
            // console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }



    //read all campaigns
    const { data: allCampaignsData, isLoading: isCampaignDataLoading } = useContractRead(contract, "getCampaigns")




    return <ContractContext.Provider value={{
        createCampaignCall,
        isCreateCampaignLoading,
        donateCampaignCall,
        isDonateLoading,
        isCampaignDataLoading,
        allCampaignsData
    }}>
        {children}
    </ContractContext.Provider>
}




