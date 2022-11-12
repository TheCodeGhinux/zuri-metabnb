import React from 'react'
import './conect.css'
import img1 from '../../assets/metamask.png'
import img2 from '../../assets/walletconnect.png'




const Connect = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay hover:opacity-100 active:opacity-100' >
        <div onClick={(e) => {
          e.stopPropagation()
        }} className="modal__con">
            <div className="modal__right flex justify-between py-6 px-8 text-black text-xl font-bold">
                <h3 className="">Connect Wallet</h3>
                <p onClick={onClose} className="close__btn">X</p>
            </div>
            <div className='flex flex-col p-8 gap-4 text-black' >
              <p className=" flex ">Choose your prefered wallet</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-3 px-5 bg-gray-100 rounded-lg border border-gray-300">
                  <div className="flex items-center gap-4">
                    <img src={img1} alt="" /> 
                    <p>Metamask</p>
                  </div>
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
                  </svg>

                </div>
                <div className="flex justify-between items-center py-3 px-5 rounded-lg border border-gray-300">
                    <div className="flex items-center gap-4">
                      <img src={img2} alt="" /> 
                      <p>WalletConnect</p>
                    </div>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
                    </svg>

                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Connect
