'use client'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function CustomCursor() {
    return <AnimatedCursor
        color="78, 205, 196"
        innerSize={8}
        outerSize={35}
        innerScale={3}
        outerScale={1}
        outerAlpha={0}
        outerStyle={{
            border: '1px solid #4ecdc4'
        }} />
}
