import Image from 'next/image';


function FeaturesOffice({dataSymbol, dataCaption, dataDescription}: {dataSymbol: string; dataCaption: string, dataDescription: string}) {
  return (
     <div className="flex items-center gap-4">
        <Image width={34} height={34} src={dataSymbol} alt="icon" />
        <div className="flex flex-col gap-[2px]">
            <p className="font-bold text-lg leading-[24px]">{dataCaption}</p>
            <p className="text-sm leading-[21px]">{dataDescription}</p>
        </div>
    </div>
  )
}

export default FeaturesOffice