import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              PRESENTATION STUDIO
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition-colors">Портфолио</a>
              <a href="#cases" className="text-gray-700 hover:text-orange-500 transition-colors">Кейсы</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
              Заказать презентацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Презентации, которые продают
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Создаем презентации для бизнеса, которые впечатляют инвесторов, убеждают клиентов и помогают закрывать сделки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-lg px-8 py-4">
              <Icon name="Play" className="mr-2" />
              Посмотреть портфолио
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-4">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Бизнес-презентации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Презентации для инвесторов, партнеров и клиентов. Четкая структура, убедительные аргументы и профессиональный дизайн.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Monitor" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Продуктовые презентации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Демонстрация продуктов и услуг с акцентом на преимущества и выгоды для клиентов.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Корпоративные презентации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Отчеты, планы развития, презентации для сотрудников и акционеров. Соответствие корпоративному стилю.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Startup Pitch Deck</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Презентации для привлечения инвестиций. Правильная структура, убедительные данные и запоминающийся дизайн.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Помогаем структурировать информацию, определить ключевые сообщения и выбрать оптимальный формат подачи.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Редизайн презентаций</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Превращаем скучные презентации в яркие и запоминающиеся. Современный дизайн и улучшенная структура.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-purple-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 group-hover:from-orange-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Presentation" size={48} className="text-white/80" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Проект {item}</h3>
                  <p className="text-gray-600 mb-4">Описание презентации и достигнутых результатов для клиента.</p>
                  <Badge variant="secondary" className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                    Бизнес-презентация
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Кейсы</h2>
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-orange-500 to-purple-600 text-white mb-4">
                  Финтех стартап
                </Badge>
                <h3 className="text-3xl font-bold mb-4">Привлекли $2М инвестиций</h3>
                <p className="text-gray-600 mb-6">
                  Создали pitch deck для финтех стартапа, который помог привлечь первый раунд инвестиций. 
                  Четкая структура, убедительная презентация продукта и финансовых показателей.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />20 слайдов презентации</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />3 версии под разные аудитории</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анимации и интерактивные элементы</li>
                </ul>
                <Button className="bg-gradient-to-r from-orange-500 to-purple-600">Подробнее</Button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-orange-200 to-purple-200 rounded-lg relative overflow-hidden">
                <img 
                  src="/img/a00c23a1-5e65-42d5-b862-4f736e3385f1.jpg" 
                  alt="Кейс финтех стартапа" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-600/10"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg relative overflow-hidden lg:order-1">
                <img 
                  src="/img/bdf61268-6fba-49b4-b661-fbe1d33cc1b9.jpg" 
                  alt="Кейс e-commerce платформы" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10"></div>
              </div>
              <div className="lg:order-2">
                <Badge className="bg-gradient-to-r from-purple-600 to-orange-500 text-white mb-4">
                  E-commerce
                </Badge>
                <h3 className="text-3xl font-bold mb-4">Рост продаж на 150%</h3>
                <p className="text-gray-600 mb-6">
                  Разработали продуктовую презентацию для e-commerce платформы. Показали преимущества 
                  перед конкурентами и план масштабирования бизнеса.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Анализ конкурентов</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Визуализация данных</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} />Интерактивные диаграммы</li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-600 to-orange-500">Подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Алексей Петров", company: "CEO TechStart", text: "Презентация помогла нам привлечь инвестиции. Профессиональный подход и отличный результат!" },
              { name: "Мария Иванова", company: "CMO RetailPro", text: "Команда создала презентацию, которая превзошла все ожидания. Рекомендую!" },
              { name: "Дмитрий Сидоров", company: "Founder EduTech", text: "Благодаря качественной презентации мы закрыли крупную сделку с партнерами." }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-orange-500 mr-3" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-orange-500 mr-3" />
                  <span>hello@presentation-studio.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="text-orange-500 mr-3" />
                  <span>Москва, Красная площадь, 1</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Получить консультацию</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Сообщение</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-4">
            PRESENTATION STUDIO
          </div>
          <p className="text-gray-400 mb-8">Презентации, которые работают на ваш бизнес</p>
          <p className="text-gray-500">© 2024 Presentation Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;