'use client'
 
import { useRouter } from 'next/navigation'
 
import React from 'react'
import styles from './button.module.scss'


const StartButton = () => {
  const router = useRouter()
  return (

      <button className={styles.button} onClick={() => router.push('/registration')} role="button"> Start Now</button>
   
  )
}

export default StartButton
