import * as React from "react";

type Props = {
    title: string
};
export const SkillCard = (props: Props) => {
    return (
        <div className="flex justify-center items-center rounded-lg py-3 px-10 cursor-pointer shadow-[10px_10px_21px_#d9d9d9,-10px_-10px_21px_#ffffff] hover:shadow-[inset_10px_10px_21px_#d9d9d9,inset_-10px_-10px_21px_#ffffff]">
            <p className="font-medium text-xl">{props.title}</p>
        </div>
    );
};