'use client'
 
import { useRouter } from 'next/navigation'
 
import React from 'react'
import styles from './page.module.scss'


const StartButton = () => {
  const router = useRouter()
  return (
    <div>
      <button className={styles.button} onClick={() => router.push('/registration')} role="button"> Start Now</button>
    </div>
  )
}

export default StartButton
