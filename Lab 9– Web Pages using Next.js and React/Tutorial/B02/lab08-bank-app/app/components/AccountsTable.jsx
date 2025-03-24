'use client'
import React from 'react'

export default function AccountsTable({ x, y, initialAccounts, onAlertMe }) {
    return (
        <div>
            AccountsTable
            x = {x}
            y= {y}
            
            <button onClick={() => onAlertMe()}>Alert First Element</button>
        </div>
    )
}
