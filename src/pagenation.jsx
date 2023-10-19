import React from 'react'

const pagenation = () => {
  return (
    <div>
      <div className='col-12 d-flex justify-content-center mt-5'>
        <div class="pagination">
          <ul className='d-flex'>
            <li class="page-link">&laquo; Previous</li>
            <li class="page-link">1</li>
            <li class="page-link">2</li>
            <li class="page-link">3</li>
            <li class="page-link">4</li>
            <li class="page-link">5</li>
            <li class="page-link">6</li>
            <li class="page-link">7</li>
            <li class="page-link">8</li>
            <li class="page-link">Next &raquo;</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default pagenation