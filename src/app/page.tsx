import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Progress} from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'

export default function Home(){
  return (

    
    <div className='flex flex-col gap-y-4 ml-5'>
      <div className='p-4'></div>
      <div>
        <Button variant={'elevated'}>
          I am A button
        </Button>
      </div>
      <div>
        <Input placeholder='I am an Input' />
      </div>

      <div>
        <Progress value={50}/>
      </div>

      <div>
        <Textarea  placeholder='i am a text area'></Textarea>
      </div>

      <div>
        <Checkbox/>
      </div>
    </div>
  );
};