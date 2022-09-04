import * as React from "react";

type Props = {
    title: string
};
export const SkillCard = (props: Props) => {
    return (
        <div className="flex justify-center items-center rounded-md sm:rounded-lg py-1 sm:py-2 md:py-3 px-6 sm:px-8 md:px-10 cursor-pointer shadow-[8px_8px_16px_#dedede,-8px_-8px_16px_#ffffff] md:shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d9d9d9,inset_-8px_-8px_16px_#ffffff] md:hover:shadow-[inset_10px_10px_21px_#d9d9d9,inset_-10px_-10px_21px_#ffffff]">
            <p className="font-medium md:text-xl">{props.title}</p>
        </div>
    );
};