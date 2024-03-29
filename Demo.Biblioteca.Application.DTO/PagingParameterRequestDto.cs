namespace Demo.Biblioteca.Application.DTO
{
    public class PagingParameterRequestDto
    {
        const int MaxPageSize = 20;  
  
        public int PageNumber { get; set; } = 1;  
  
        private int _pageSize { get; set; } = 10;  
  
        public int PageSize  
        {  
  
            get { return _pageSize; }  
            set  
            {  
                _pageSize = (value > MaxPageSize) ? MaxPageSize : value;  
            }  
        }
    }
}
