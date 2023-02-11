import Button from 'components/atoms/Button'
import { useShoppingCartContext } from 'contexts/ShoppingCartContext'
import { Product } from 'types'

interface AddToCartButtonContainerProps {
  /**
   * 追加される商品
   */
  product: Product
  /**
   * 追加ボタンを押した際のイベントハンドラ
   */
  onAddToCartButtonClick?: (product: Product) => void
}

/**
 * カート追加ボタンコンテナ
 */
const AddToCartButtonContainer = ({
  product,
  onAddToCartButtonClick,
}: AddToCartButtonContainerProps) => {
  const { cart, addProductToCart } = useShoppingCartContext()
  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id)
    const result = cart.findIndex((v) => v.id === productId)

    // 同じ商品がカートに存在しない場合は、カートに追加する
    if (result === -1) {
      addProductToCart(product)
    }

    onAddToCartButtonClick && onAddToCartButtonClick(product)
  }

  return (
    <Button
      width={{ base: '100%', md: '400px' }}
      height="66px"
      onClick={handleAddToCartButtonClick}
    >
      カートに追加
    </Button>
  )
}

export default AddToCartButtonContainer
