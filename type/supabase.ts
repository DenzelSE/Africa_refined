export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          image_url: string | null
          category: string | null
          in_stock: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          image_url?: string | null
          category?: string | null
          in_stock?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          image_url?: string | null
          category?: string | null
          in_stock?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          customer_name: string
          customer_email: string
          customer_phone: string | null
          address: string
          city: string
          postal_code: string
          country: string
          total_amount: number
          status: string
          payment_method: string | null
          payment_status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_name: string
          customer_email: string
          customer_phone?: string | null
          address: string
          city: string
          postal_code: string
          country?: string
          total_amount: number
          status?: string
          payment_method?: string | null
          payment_status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string | null
          address?: string
          city?: string
          postal_code?: string
          country?: string
          total_amount?: number
          status?: string
          payment_method?: string | null
          payment_status?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          id: string
          donor_name: string | null
          donor_email: string | null
          amount: number
          project: string | null
          payment_method: string | null
          payment_status: string
          message: string | null
          is_anonymous: boolean
          created_at: string
        }
        Insert: {
          id?: string
          donor_name?: string | null
          donor_email?: string | null
          amount: number
          project?: string | null
          payment_method?: string | null
          payment_status?: string
          message?: string | null
          is_anonymous?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          donor_name?: string | null
          donor_email?: string | null
          amount?: number
          project?: string | null
          payment_method?: string | null
          payment_status?: string
          message?: string | null
          is_anonymous?: boolean
          created_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          event_date: string | null
          location: string | null
          image_url: string | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          event_date?: string | null
          location?: string | null
          image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          event_date?: string | null
          location?: string | null
          image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string | null
          image_url: string | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt?: string | null
          image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string | null
          image_url?: string | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      media: {
        Row: {
          id: string
          file_name: string
          file_path: string
          file_type: string
          file_size: number | null
          alt_text: string | null
          created_at: string
          uploaded_by: string | null
        }
        Insert: {
          id?: string
          file_name: string
          file_path: string
          file_type: string
          file_size?: number | null
          alt_text?: string | null
          created_at?: string
          uploaded_by?: string | null
        }
        Update: {
          id?: string
          file_name?: string
          file_path?: string
          file_type?: string
          file_size?: number | null
          alt_text?: string | null
          created_at?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_uploaded_by_fkey"
            columns: ["uploaded_by"]
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          id: string
          name: string
          position: string
          bio: string | null
          image_url: string | null
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          position: string
          bio?: string | null
          image_url?: string | null
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string
          bio?: string | null
          image_url?: string | null
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
