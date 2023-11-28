import React from 'react'

export default function Loader() {
  return (
    <div class="d-flex justify-content-center">
        <div class="spinner-border  text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
