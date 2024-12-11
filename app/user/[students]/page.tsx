
// import React from 'react'


// export default async function UserPage({params}: {params:{students:string}}) 

// {
//     const api = await fetch(`https://jsonplaceholder.typicode.com/users/${params.students}`)
//     const data = await api.json()
//     console.log(data)
//     console.log(params) 
//     return( 
//     <div>

//       <h1>Students Details</h1>
//       <p>Id : {data.id}</p>
//       <p>Name : {data.name}</p>
//       <p>Email : {data.email}</p>
//       <p>Website : {data.website}</p>
//       <p>Phone: {data.phone}</p>

//     </div>
//   )
// }

"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default async function UserPage({params}: {params:{students:string}}) {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users/${params.students}`)
    const data = await api.json()
    console.log(data)
    console.log(params)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full"
            >
                <div className="p-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold text-gray-800 mb-6"
                    >
                        Students Details
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <DetailItem label="Id" value={data.id} />
                        <DetailItem label="Name" value={data.name} />
                        <DetailItem label="Email" value={data.email} />
                        <DetailItem label="Website" value={data.website} />
                        <DetailItem label="Phone" value={data.phone} />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="bg-gray-100 px-8 py-4"
                >
                    <Link
                        href="/user"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                    >
                        ← Back to User List
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

function DetailItem({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <span className="text-gray-600">{label}:</span>
            <span className="font-medium text-gray-800">{value}</span>
        </div>
    )
}