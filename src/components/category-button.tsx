import { Text, Pressable, PressableProps } from 'react-native'
import {clsx} from 'clsx'

type CategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
}

export function CategoryButton({title, isSelected, ...rest}:CategoryProps){
    return(
        <Pressable className={
            clsx ('bg-slate-800 justify-center rounded-md h-8', 
            isSelected && 'border-2 border-lime-300')} {...rest}>
                
            <Text className='text-slate-100 font-subtitle text-sm'
            > {title} </Text>
        </Pressable>
    )
}