import Link from 'next/link'
import React from 'react'

export default function Routing() {
    return (
        <div>
            <Link href="/"><a>Главная</a></Link>
            <Link href="/users"><a>Пользователи</a></Link>
        </div>
    )
}
