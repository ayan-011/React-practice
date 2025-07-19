 
import BasicCount from './code/Card1';
import CardSwitcher from './code/Card2'; 
import Factor from './code/Card4';
import Todo3 from './code/Card5';  
import TodoApp from './code/Card6';
 

import "./App.css"  
import Card7 from './code/Card7';

export const App = () => {
  return (
    <div className=" bg-black grid grid-cols-3 grid-rows-4 gap-4 p-4  ">


      <div className="bg-zinc-900  rounded-xl p-4 shadow flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 1</div>
        <BasicCount/>
      </div>



      <div className="bg-zinc-900 rounded-xl p-4 shadow flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400 '> Card 2</div>
       <Factor/>
      </div>

      <div className="bg-zinc-900 rounded-xl p-4 shadow flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 3</div>
       <CardSwitcher/>
      </div>

      <div className="bg-zinc-900 rounded-xl p-4 shadow flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 4</div>
       <TodoApp/>
      </div>

       

      <div className="bg-zinc-900 rounded-xl p-4 shadow overflow-y-scroll  scrollbar-hide h-80 flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 5</div>
       <Todo3/>
      </div>

      <div className="bg-zinc-900 rounded-xl p-4 shadow  flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 6</div>
         <Card7/>
      </div>
 
      <div className="bg-zinc-900 rounded-xl p-4 shadow  flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 7</div>
      
      </div>
 
      <div className="bg-zinc-900 rounded-xl p-4 shadow  flex flex-col gap-y-6">
        <div className='w-full flex justify-center text-zinc-400'> Card 8</div>
      
      </div>
 
       
    </div>
  );
}
