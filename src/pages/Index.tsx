import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Elegant Header */}
          <div className="mb-12">
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8"></div>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              День Рождения
            </h1>
            <p className="text-xl text-charcoal/70 font-light tracking-wide">
              Приглашение на особенное торжество
            </p>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-8"></div>
          </div>

          {/* Main Invitation Card */}
          <Card className="p-12 mb-16 bg-white/90 backdrop-blur-sm border-2 border-gold/20 shadow-2xl">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-display text-4xl font-semibold text-charcoal mb-4">
                  Вы приглашены
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                  Присоединяйтесь к нам для празднования особенного дня в элегантной атмосфере. 
                  Ваше присутствие сделает этот вечер незабываемым.
                </p>
              </div>

              {/* Event Details Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon name="Calendar" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Дата и время</h3>
                  <p className="text-charcoal/70">15 августа 2025</p>
                  <p className="text-charcoal/70">19:00 - 23:00</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon name="MapPin" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Место проведения</h3>
                  <p className="text-charcoal/70">Ресторан "Золотой век"</p>
                  <p className="text-charcoal/70">ул. Пушкина, 25</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon name="Shirt" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Дресс-код</h3>
                  <p className="text-charcoal/70">Коктейльная одежда</p>
                  <p className="text-charcoal/70">Элегантный стиль</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Interactive Map Section */}
          <Card className="p-8 mb-12 bg-white/90 backdrop-blur-sm border border-gold/20">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">Как добраться</h3>
              <p className="text-charcoal/70">Нажмите на карту для открытия в навигаторе</p>
            </div>
            
            <div className="relative h-64 bg-gradient-to-br from-gold/5 to-gold/10 rounded-lg border border-gold/20 cursor-pointer hover:shadow-lg transition-shadow group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-charcoal/70 font-medium">Интерактивная карта</p>
                  <p className="text-sm text-charcoal/50 mt-1">Ресторан "Золотой век"</p>
                </div>
              </div>
            </div>
          </Card>

          {/* RSVP Section */}
          <div className="text-center space-y-6">
            <h3 className="font-display text-2xl font-semibold text-charcoal">Подтвердите участие</h3>
            <p className="text-charcoal/70">Просим подтвердить своё присутствие до 10 августа</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white px-8 py-3 text-lg font-medium"
                size="lg"
              >
                <Icon name="Check" size={20} className="mr-2" />
                Буду присутствовать
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/5 px-8 py-3 text-lg font-medium"
                size="lg"
              >
                <Icon name="X" size={20} className="mr-2" />
                Не смогу прийти
              </Button>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-16 pt-8 border-t border-gold/20">
            <p className="text-charcoal/60 italic text-lg font-light">
              "Жизнь измеряется не количеством вдохов, а моментами, которые захватывают дух"
            </p>
            <p className="text-charcoal/50 mt-2">С нетерпением ждём встречи с вами!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;