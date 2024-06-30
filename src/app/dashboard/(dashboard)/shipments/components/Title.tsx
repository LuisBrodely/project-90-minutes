import React from 'react'

interface TitleProps {
    text: string;
}

export function Title({ text }: TitleProps) {
    return (
        <div className="flex gap-2 mt-5">
            <div className="w-[3px] h-9 bg-[#515151]" />
            <h2 className="font-semibold text-2xl text-[#515151]">
                {text}
            </h2>
        </div>
    )
}
