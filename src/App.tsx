import type { Component } from 'solid-js'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineInstagram,
} from 'solid-icons/ai'
import { BiLogosGmail } from 'solid-icons/bi'

const App: Component = () => {
    return (
        <div class="min-h-screen grid grid-rows-[1fr] overflow-y-auto">
            <main class="container space-y-4 grid place-items-center h-full">
                <div class="space-y-4 text-center">
                    <h1>Hello, I'm Soksedtha Ly (GT)!</h1>
                    <p>&#123; tech: "enthusiast" | "nerd" &#125;</p>
                    <div class="flex gap-x-2">
                        <p>Founding AI and Software Engineer</p>
                        <a href="https://www.linkedin.com/company/pints-ai/">
                            @pints.ai
                        </a>
                    </div>
                    <div class="flex justify-center gap-x-4">
                        <a
                            href="https://github.com/gtmetric"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub size={40} />
                        </a>
                        <a
                            href="https://linkedin.com/soksedtha-ly"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin size={40} />
                        </a>
                        <button
                            type="button"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    'ly.soksedtha72@gmail.com',
                                )
                                alert(
                                    'ly.soksedtha72@gmail.com copied to clipboard!',
                                )
                            }}
                            title="Copy email to clipboard"
                        >
                            <BiLogosGmail size={40} />
                        </button>
                        <a
                            href="https://www.instagram.com/gt.metric/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineInstagram size={40} />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
