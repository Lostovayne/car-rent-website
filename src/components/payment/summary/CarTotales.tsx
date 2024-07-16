
export const CarTotales = () => {
    return (
      <div className="border border-1 p-2 flex flex-col gap-4">
        
        {/* subtotal */}
        <div className="flex justify-between">
          <span>SUbTotal</span>
          <span>$80.00</span>
        </div>
  
        {/* tax */}
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
  
        {/* apply now */}
        <div className="flex justify-between px-10 bg-gray-200 p-2">
          <span className="font-light">Apply promo code</span>
          <span className="font-bold">Apply now</span>
        </div>
  
        {/* total */}
        <div className="flex justify-between items-center pt-4">
          <div className="font-bold text-xl flex flex-col">
            <span>Total Rental Price</span>
            <span className="font-light text-sm">Overall price and includes rental discount</span>
          </div>
          <span className="font-bold text-xl">$80.00</span>
        </div>
  
      </div>
    )
  }