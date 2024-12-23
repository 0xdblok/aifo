import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-grey-200 flex justify-center w-full  ">
<form class="flex flex-col max-w-screen-md bg-black" aria-labelledby="createAgentForm">
  <div class="flex flex-wrap gap-5 justify-between w-full text-white max-w-[542px] max-md:max-w-full">
    <div class="flex flex-col ">
      <button type="button" class="flex gap-1.5 self-start px-4 py-2 text-base font-bold leading-none text-center whitespace-nowrap rounded-3xl bg-neutral-800">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b9e20a4faa7f5a29ac178d599dba06223126b0a9b088aa38a64d99d1b3e2a6?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 w-4 aspect-[0.8]" />
        <span class="my-auto">Back</span>
      </button>
      <div class="flex gap-2 self-end mt-2">
        <div class="self-stretch px-2 w-6 h-6 text-sm leading-none whitespace-nowrap bg-blue-700 rounded-full min-h-[24px]" role="status" aria-label="Step 1">1</div>
        <div class="my-auto text-sm leading-loose">Enter details</div>
      </div>
    </div>
    <div class="flex gap-2 self-end mt-11 max-md:mt-10">
      <div class="self-stretch pr-2 pl-2 w-6 h-6 text-sm leading-none whitespace-nowrap bg-blue-700 rounded-full min-h-[24px]" role="status" aria-label="Step 2">2</div>
      <div class="my-auto text-sm leading-loose">Set amount</div>
    </div>
  </div>

  <div class="flex flex-col mt-4 w-full max-md:max-w-full">
    <h2 class="text-2xl font-bold leading-none text-white">Basic</h2>

    <label class="flex overflow-hidden flex-col justify-center px-4 py-5 mt-2 w-full text-base rounded-2xl border border-dashed border-white border-opacity-20 min-h-[108px] text-white text-opacity-60 max-md:max-w-full" for="agentPhoto">
      <div class="flex flex-wrap gap-5 py-1 pr-20 w-full max-md:pr-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcbf5d1262ff8ea5d988ddc4ae072fea4da3fb7b248007a6ef5d6ce22a6f1aa2?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
        <div class="flex flex-col items-start">
          <div class="self-stretch text-white">AI agent's profile photo*</div>
          <div class="mt-3">Drop a file or <span class="text-pink-300">Browse</span></div>
          <div class="mt-2">Max size 10Mb</div>
        </div>
      </div>
      <input type="file" id="agentPhoto" class="sr-only" accept="image/*" aria-label="Upload AI agent's profile photo" required />
    </label>

    <div class="flex flex-col px-4 mt-2 w-full rounded-2xl bg-neutral-900 min-h-[56px] max-md:max-w-full">
      <label class="flex flex-col justify-center py-5 w-full min-h-[56px] max-md:pr-5 max-md:max-w-full">
        <span class="sr-only">AI Agent name</span>
        <input type="text" maxlength="13" placeholder="AI Agent name* (max 13 symbols)" class="bg-transparent text-white border-none outline-none w-full" required aria-label="AI Agent name" />
      </label>
    </div>

    <div class="flex flex-col px-4 pb-1 mt-2 w-full rounded-2xl bg-neutral-900 min-h-[84px] max-md:max-w-full">
      <label class="flex flex-col w-full min-h-[56px] max-md:max-w-full">
        <span class="sr-only">Agent's ticker</span>
        <input type="text" maxlength="6" placeholder="Agent's ticker* (max 6 symbols)" class="bg-transparent text-white border-none outline-none w-full py-5" required aria-label="Agent's ticker" />
        <div class="flex-1 shrink pt-1.5 w-full text-xs border-t border-neutral-700 text-neutral-400 max-md:max-w-full">Do not enter $ symbol</div>
      </label>
    </div>

    <div class="flex flex-col py-6 mt-2 w-full rounded-2xl bg-neutral-900 max-md:max-w-full">
      <div class="flex flex-col items-start px-4 w-full max-md:max-w-full">
        <label class="text-base font-bold leading-loose text-white" for="agentLanguage">Agent Language</label>
        <div class="mt-3 text-sm leading-loose text-white text-opacity-60">Choose your preferred language for your agent</div>
        <button type="button" class="flex flex-wrap gap-2 items-center self-stretch px-4 py-3 mt-2.5 rounded-2xl bg-neutral-800 w-full" aria-haspopup="listbox" aria-expanded="false">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa06a4faac8d0a9c08abb299d4bea82886778d558027a0f50702f8f761423762?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="English language flag" class="w-4 aspect-[1.33]" />
          <span class="self-stretch my-auto text-base leading-loose text-white">english</span>
        </button>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49ccb8b17fbdf27239eb4e649d8dc5fe8ab38fb56ddb9754928344de5830271?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain z-10 self-end -mt-8 mr-8 w-4 aspect-square max-md:mr-2.5" />
    </div>

    <div class="flex flex-col px-4 py-3 mt-2 w-full rounded-2xl bg-neutral-900 min-h-[104px] max-md:max-w-full">
      <label class="font-bold text-white" for="voiceStyle">Voice Style*</label>
      <button type="button" class="flex flex-wrap gap-10 justify-between px-4 py-3 mt-2 w-full rounded-2xl bg-neutral-800 text-white text-opacity-60 max-md:max-w-full" aria-haspopup="listbox" aria-expanded="false">
        <span class="my-auto">Select your preferred voice for your agent</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc68c8aaa19d700059c40736864679549d45ea8a367df160c8d16bbd1fdaadc6?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 w-4 aspect-[0.67]" />
      </button>
    </div>

    <div class="flex flex-col px-4 py-5 mt-2 w-full text-white rounded-2xl bg-neutral-900 min-h-[672px] max-md:max-w-full">
      <div class="text-sm leading-loose text-white text-opacity-60">Social links (optional)</div>
      
      <label class="flex flex-col justify-center px-4 py-2 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[72px] max-md:max-w-full">
        <span class="text-xs">Telegram chat link</span>
        <input type="url" placeholder="https://t.me/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Telegram chat link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">Telegram channel link</span>
        <input type="url" placeholder="https://t.me/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Telegram channel link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">Twitter link</span>
        <input type="url" placeholder="https://x.com/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Twitter link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">Discord link</span>
        <input type="url" placeholder="https://discord.com/invite/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Discord link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">Instagram link</span>
        <input type="url" placeholder="https://instagram.com/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Instagram link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">YouTube link</span>
        <input type="url" placeholder="https://youtube.com/example" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="YouTube link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">TikTok link</span>
        <input type="url" placeholder="https://tiktok.com/" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="TikTok link" />
      </label>

      <label class="flex flex-col justify-center px-4 py-1.5 mt-2 w-full rounded-2xl bg-neutral-800 min-h-[68px] max-md:max-w-full">
        <span class="text-xs">Website link</span>
        <input type="url" placeholder="https://example.com" class="bg-transparent text-base text-white border-none outline-none mt-1.5" aria-label="Website link" />
      </label>
    </div>

    <button type="button" class="flex overflow-hidden flex-col mt-2 w-full text-base font-bold text-blue-500 bg-neutral-950 max-md:max-w-full" aria-expanded="false">
      <div class="flex overflow-hidden items-center pl-4 w-full bg-neutral-950 min-h-[44px] max-md:max-w-full">
        <div class="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch pr-4 my-auto w-full basis-0 min-h-[44px] min-w-[240px] max-md:max-w-full">
          <div class="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-72 py-3 my-auto w-full basis-0 min-h-[44px] min-w-[240px] max-md:px-5 max-md:max-w-full">
            <span class="self-stretch pb-px my-auto w-[187px]">Show advanced settings</span>
          </div>
        </div>
      </div>
    </button>
  </div>

  <button type="submit" class="px-96 py-3 mt-2 w-full text-base font-bold leading-loose text-center text-white whitespace-nowrap bg-blue-700 rounded-3xl max-md:px-5 max-md:max-w-full">Connect</button>
</form></div>
  );
}
