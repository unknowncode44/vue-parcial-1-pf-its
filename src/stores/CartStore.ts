import { defineStore } from "pinia";
import type { Book } from '@/models/BookModel'
import type { CartState } from "@/models/CartState";

export const useCartStore = defineStore({
    id: "cart",
    state: (): CartState => ({
        loading: false,
        data: [],
        total: 0,
        booksOnCart: 0
    }),
    actions: {
        addBookToCart(book: Book): void {
            this.data.push(book)
            this.booksOnCart++
            this.total += book.price
        },
        removeBookFromCart(book: Book): void {
            this.data = this.data.filter(item => item.id !== book.id)
            this.booksOnCart--
            this.total -= book.price
        },
        clearCart(): void {
            this.data = []
        },
        getAmountOfBooksOnCart(): number {
            return  this.booksOnCart
        },
        getTotalPrice(): number {
            return  this.total
        }

    }
})
