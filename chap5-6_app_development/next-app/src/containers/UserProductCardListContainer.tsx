import Link from 'next/link'
import { Fragment } from 'react'
import ProductCard from 'components/organisms/ProductCard'
import ProductCardList from 'components/organisms/ProductCardList'
import useSearch from 'services/products/use-search'
import { ApiContext, Product } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || 'api/proxy',
}

interface UserProductCardListContainerProps {
  /**
   * 商品を所有するユーザID
   */
  userId: number
  /**
   * 初期で表示する商品リスト
   */
  products?: Product[]
}

/**
 * ユーザ商品カードリストコンテナ
 */
const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  // 最新のユーザの所持する商品を取得し、更新があった場合には
  // initialで指定されているデータを上書きする
  const { products: userProducts } = useSearch(context, {
    userId,
    initial: products,
  })

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <Fragment key={p.id}>
          <Link href={`/products/${p.id}`} passHref>
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          </Link>
        </Fragment>
      ))}
    </ProductCardList>
  )
}

export default UserProductCardListContainer
