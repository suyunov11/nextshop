import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'
import { getError } from '../utils/error'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LoginScreen() {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (err) {
      toast.error(getError(err))
    }
  }

  const githubLoginHandler = async () => {
    try {
      const result = await signIn('github', {
        redirect: false,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error(getError(error))
    }
  }

  const googleLoginHandler = async () => {
    try {
      const result = await signIn('google', {
        redirect: false,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error(getError(error))
    }
  }

  const kakaoLoginHandler = async () => {
    try {
      const result = await signIn('kakao', {
        redirect: false,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error(getError(error))
    }
  }

  const naverLoginHandler = async () => {
    try {
      const result = await signIn('naver', {
        redirect: false,
      })
      if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error(getError(error))
    }
  }

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>

        <div className="bg-blue-300 p-5 mb-2">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email',
                },
              })}
              className="w-full"
              id="email"
              autoFocus
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Please enter password',
                minLength: {
                  value: 3,
                  message: 'Password is more than 3 chars',
                },
              })}
              className="w-full"
              id="password"
              autoFocus
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>

          <div className="mb-4">
            <button type="submit" className="primary-button">
              Login
            </button>
          </div>

          <div className="mb-4">
            Don&apos;t have an account? <Link href="register">Register</Link>
          </div>
        </div>
        <div className="p-5 bg-slate-500 rounded-lg">
          <div className="mb-4">
            <button
              className="primary-button w-full"
              type="button"
              onClick={githubLoginHandler}
            >
              Github Login
            </button>
          </div>

          <div className="mb-4">
            <button
              className="primary-button w-full"
              type="button"
              onClick={googleLoginHandler}
            >
              Google Login
            </button>
          </div>

          <div className="mb-4">
            <button
              className="primary-button w-full"
              type="button"
              onClick={kakaoLoginHandler}
            >
              카카오 Login
            </button>
          </div>

          <div className="mb-4">
            <button
              className="primary-button w-full"
              type="button"
              onClick={naverLoginHandler}
            >
              네이버 Login
            </button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
