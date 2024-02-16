import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon} from '@heroicons/react/20/solid';
import { FaShoppingCart } from "react-icons/fa";
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_MENUITEMS } from '../utils/queries';
import Categories from '../components/Categories'
import MenuList from '../components/Menulist';
import Auth from '../utils/auth';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Order = ()  => {
  
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const {loading, data} = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
    const [selectedCategory, setSelectedCategory] = useState(null)   

    const {loading: itemsLoading,  data: foodData} = useQuery(QUERY_MENUITEMS,{
      variables: {categoryId: selectedCategory}});
      




    return (
    <div className="bg-white-900">
      {Auth.loggedIn() ? (
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Options</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <Categories categories={categories} onSelectCategory={setSelectedCategory} />

                  
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-l border-red-600 bg-slate-300 ">
          <div className="flex items-baseline justify-between border-b border-red-600 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Menu</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
              </Menu>

            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <FaShoppingCart className="h-5 w-5" aria-hidden="true" />
             </button> 
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <Categories categories={categories} onSelectCategory={setSelectedCategory} />
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
              {itemsLoading ? (
        <p>Loading items...</p>
      ) : (
        <MenuList menuItems={foodData?.menuItems} />
      )}
                </div>
            </div>
          </section>
        </main>
      </div>
            ) : (
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Please Login to Order
                </h2>
              </div>
              </div>
            )}
    </div> 

  )
}


export default Order; 