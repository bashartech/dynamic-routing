
// import React from 'react'
// import Link from "next/link"
// export default async function UserPage() {

//     const api = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await api.json()
//     console.log(data)

// return (
    
//     <div>
//         <h1>User List :</h1>
//     <ul>
//         {
//             data.map((item:any,id:number)=>{
//                 return(
//                 <li>
//                 <Link href={`user/${item.id}`}> {item.name}</Link></li>
//                 )
//             })
//         }
//     </ul>

//     </div>
//   )
// }
"use client"

import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { User, Search } from 'lucide-react'

export default async function UserPage() {
    const api = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await api.json()
    console.log(data)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
            <div className="container mx-auto px-4 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8"
                >
                    <div className="bg-blue-600 p-6 flex items-center justify-between">
                        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center">
                            <User className="mr-4" />
                            User Directory
                        </h1>
                        <div className="relative hidden md:block">
                            <input 
                                type="text" 
                                placeholder="Search users..." 
                                className="pl-10 pr-4 py-2 rounded-full bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                        </div>
                    </div>
                    <div className="p-6">
                        <motion.ul 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {data.map((item: any, id: number) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: id * 0.1 }}
                                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-105"
                                >
                                    <Link href={`user/${item.id}`} className="block p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                                <p className="text-gray-600 text-sm">{item.email}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm truncate">{item.company.catchPhrase}</p>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center text-gray-600"
                >
                    Total Users: {data.length}
                </motion.p>
            </div>
        </div>
    )
}