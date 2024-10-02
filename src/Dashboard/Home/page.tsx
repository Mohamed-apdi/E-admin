import { Overviews } from "./_components/overview-cards"
import { PopularProducts } from "./_components/popular-products"
import { VisualizingData } from "./_components/visualizing-data"

export const Home = () => {
  return (
    <div className="w-full">
      <div className="flex justify-around items-center gap-x-4">
        <Overviews/>
      </div>

       <div className="flex flex-col gap-4 md:flex-row gap-x-10">
        <div className="w-full">
        <VisualizingData/>
        </div>
       <div className="w-full">
       <PopularProducts/>
       </div>
      </div>

    </div>
  )
}
