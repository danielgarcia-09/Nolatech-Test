import Chats from '@/components/chats'
import ChatContainer from '@/components/chats/ChatContainer'
import ChatHeader from '@/components/chats/ChatHeader'
import Layout from '@/components/layout/layout'
import { useState } from 'react'

export default function Home() {
  return (
    <Layout
      title='Chat'
    >
      <div className="flex h-full">
        <div className="w-full lg:w-1/2 h-full">
          <ChatHeader />
          <Chats />

          <div className="fixed flex items-center justify-center lg:bottom-0 bottom-0 lg:right-[55%] right-[4%] py-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full text-3xl font-bold">
                    +
                </button>
            </div>
        </div>

        <div className="w-1/2 hidden lg:block h-full ml-3 lg:border-l lg:border-l-black">
          <ChatContainer />
        </div>
      </div>
    </Layout>
  )
}
