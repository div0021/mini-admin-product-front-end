import { ChevronDown, Folder, PlusCircle, PlusSquare } from 'lucide-react';
import React from 'react';
import FolderCategories from './FolderCategories';

interface FoldersProps {
  // Define your component props here
}


const FolderCategory = [
    {name:"Products",isSubCategory:true},
    {name:"Sales",isSubCategory:true},
    {name:"Design",isSubCategory:true},
    {name:"Office",isSubCategory:false},
    {name:"Legal",isSubCategory:false},
]

const Folders = ({}: FoldersProps) => {
  return (
    <div className='w-full px-1 py-1 space-y-1 bg-white rounded-xl'>
        <div className="w-full flex justify-between items-center p-1">
            <h6 className=' text-neutral-400'>Folders</h6>
            <div className='flex items-center justify-center p-1 hover:bg-neutral-200/50 cursor-pointer rounded-full transition-all duration-300 ease-in-out opacity-50 hover:opacity-90 border border-transparent hover:border-neutral-700/10'>
            <PlusCircle className='w-5 h-5'/>

            </div>
        </div>

        {FolderCategory.map(el=>(
            <FolderCategories key={el.name} name={el.name} isSubCategory={el.isSubCategory} />
            
        ))}

        </div>
  );
};

export default Folders;