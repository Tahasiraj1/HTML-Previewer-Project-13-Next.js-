'use client';
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export default function HTMLPreview() {
    const [htmlCode, setHtmlCode] = useState<string>("");
    const [previewHtml, setPreviewHtml] = useState<string>("");

    const handlePreview = (): void => {
        setPreviewHtml(htmlCode);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setHtmlCode(e.target.value);
    };

    const handleReset = (): void => {
        setHtmlCode("");
        setPreviewHtml("");
    };

    const handleCopyToClipboard = (): void => {
        navigator.clipboard.writeText(previewHtml);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-auto text-foreground"
        style={{
            backgroundImage: `url('/htmlpre2.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        >
            {/* Center the HTML previewer card within the screen */}
            <div className="w-11/12 max-w-2xl p-6 rounded-3xl shadow-2xl bg-green-200 bg-opacity-90">
                <h1 className="text-black text-3xl font-bold mb-4 text-center">HTML Previewer</h1>
                <p className="text-gray-900 text-xl font-bold font-serif mb-4 text-center">
                    Enter your HTML code and see the preview.
                </p>
                <div className="grid gap-4">
                    {/* Textarea for entering HTML code */}
                    <Textarea
                    value={htmlCode}
                    onChange={handleChange}
                    placeholder="Enter your HTML code here..."
                    className="text-black text-lg p-4 rounded-xl border-2 border-gray-400 focus:border-black bg-background"
                    rows={8}
                    />
                    {/* Buttons to generate preview HTML & clear */}
                    <div className="flex justify-center">
                        <Button
                        className="text-md active:scale-95 transition-transform duration:300 mr-6 w-full rounded-3xl bg-green-700 hover:bg-green-600 shadow-xl"
                        onClick={handlePreview}
                        >
                            Generate Preview
                        </Button>
                        <Button
                        className="text-md active:scale-95 transition-transform duration:300 ml-6 w-full rounded-3xl bg-red-700 hover:bg-red-600 shadow-xl"
                        onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
                {/* Div to display the HTML preview */}
                <div className="mt-4 p-4 rounded-lg text-black font-bold text-lg border-gray-400 border-2">
                    <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
                </div>
                <div className="flex justify-center">
                    <Button
                    className="mt-4 text-md active:scale-95 transition-transform duration:300 w-full rounded-3xl bg-blue-700 hover:bg-blue-600 shadow-xl"
                    onClick={handleCopyToClipboard}
                    >
                        Copy to Clipboard
                    </Button>
                </div>
            </div>
        </div>
    );
}