import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

interface PortableImageProps {
  image?: SanityImage
  alt?: string
  size?: string
  'data-sanity'?: string
}

const HeaderPortableImage = ({
  image,
  alt = 'Cover image',
  ...props
}: PortableImageProps) => {
  const imageUrl = image && urlForImage(image)

  return (
    <>
      <div data-sanity={props['data-sanity']}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={alt || ' '}
            priority={true}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
    </>
  )
}

export default HeaderPortableImage
