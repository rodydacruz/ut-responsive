import Link from 'next/link'
import Image from 'next/image'

import { Facebook,Instagram,Youtube,Twitter,Pinterest } from 'react-bootstrap-icons';

export default function Links(){
    return(
        <div>
        <Link href="https://www.facebook.com/rdc.rodydacruz"><a target="_blank"><Facebook /></a></Link>
        <Link href="https://twitter.com/RODYDACRUZ"><a target="_blank"><Twitter /></a></Link>
        <Link href="https://www.youtube.com/channel/UCH1oMlEtrhWpq42f4O9rvMg"><a target="_blank"><Youtube /></a></Link>
        <Link href="https://www.instagram.com/rodydacruz/s"><a target="_blank"><Instagram /></a></Link>
        <Link href="/"><a></a></Link>
    </div>
    )
}