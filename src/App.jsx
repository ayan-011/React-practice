import BasicCount from './code/Card1';
import CardSwitcher from './code/Card2';
import Factor from './code/Card3';
import Todo3 from './code/Card5';
import TodoApp from './code/Card4';
import Card6 from './code/Card6';
import Card7 from './code/Card7';

import "./App.css";
import Card8 from './code/Card8';
import Card9 from './code/Card9';

export const App = () => {
  return (
    <div className="bg-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {/* Card 1 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 1</div>
        <BasicCount />
      </div>

      {/* Card 2 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 2</div>
        <CardSwitcher />
      </div>

      {/* Card 3 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 3</div>
        <Factor />
      </div>

      {/* Card 4 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow md:h-[360px] h-[450px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 4</div>
        <TodoApp />
      </div>

      {/* Card 5 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow  overflow-y-scroll scrollbar-hide h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 5</div>
        <Todo3 />
      </div>

      {/* Card 6 */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 6</div>
        <Card6 />
      </div>

      {/* Card 7 */}
         <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-2">
        <div className="w-full flex justify-center text-zinc-400  ">Card 7</div>
        <div className="w-full flex justify-center text-zinc-400">Background color changer</div>
        < Card7 />
      </div>

      {/* Card 8 (Empty) */}
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 8</div>
        < Card8 />
      </div>
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 9</div>
        <div className="w-full flex justify-center text-zinc-400">Email verification Input</div>
        < Card9 />
      </div>
      <div className="bg-zinc-900 rounded-xl p-4 shadow h-[360px] flex flex-col gap-y-6">
        <div className="w-full flex justify-center text-zinc-400">Card 8</div>
      </div>


    </div>
  );
}
