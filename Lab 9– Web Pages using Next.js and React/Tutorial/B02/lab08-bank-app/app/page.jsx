'use client'
import { Inter } from 'next/font/google'
import AccountsTable from './components/AccountsTable'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // we will fetch the data here
  const accounts = [
    { id: 1, name: 'Cash', type: 'Asset' },
    { id: 2, name: 'Bank', type: 'Asset' },
    { id: 3, name: 'Credit Card', type: 'Liability' },
  ]

  function alertFirstElement() {
    alert(JSON.stringify(accounts[0]))
  }

  // we will get the data
  // const accounts = 
  return (
    <>
      <h1>Accounts</h1>
      <AccountsTable
        initialAccounts={accounts}
        x={1}
        y={2}
        onAlertMe={alertFirstElement}
      />
    </>
  )
}

