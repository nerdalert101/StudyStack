import React from 'react'

/**
 * BgBlobs — renders the floating background blobs and noise overlay.
 * Place this once at the top of each page component.
 */
function BgBlobs() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>
      <div className="bg-noise" aria-hidden="true" />
    </>
  )
}

export default BgBlobs
